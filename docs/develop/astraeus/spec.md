---
sidebar_position: 3
---

# API Spec

## Introduction

This API provides functionality for managing transferable accounts on a blockchain. It allows for creating, transferring, and managing accounts with various operations such as approving addresses and signing data. The API implements a locking mechanism for enhanced security.

## Base URL

For local development, the base URL for all API endpoints is:

```
http://localhost:8080/v1
```

## Authentication

Authentication is handled through timed signatures. Each request that modifies the state requires a valid timed signature.

### Timed Signature Authentication Mechanism

The `verifyTimedSignature` function implements a time-limited signature verification process:

1. **Expiration Check**: Ensures the signature hasn't expired by comparing the current block timestamp with the `validFor` parameter.

2. **Message Hash Verification**: Recalculates the message hash using `validFor` and `signer`, then compares it with the provided `messageHash` to ensure message integrity.

3. **Signature Verification**:
   - Prepends a Mycel-specific prefix to the message hash, inspired by ERC-191 standards. This approach involves adding "\x19Mycel Signed Message:\n32" before the original message hash and then hashing the result:
     ```solidity
     bytes32 ethSignedMessageHash = keccak256(abi.encodePacked("\x19Mycel Signed Message:\n32", messageHash));
     ```
   - Splits the signature into its components (r, s, v).
   - Uses `ecrecover` to recover the signer's address from the signature.
   - Compares the recovered address with the provided `signer` address.

This process ensures that the signature is valid, hasn't expired, and was indeed created by the claimed signer. The Mycel-specific prefix helps prevent signed messages from being executed as transactions on Mycel.

### Generating Timed Signatures for Authentication

To create a signature that can be verified by the `verifyTimedSignature` function, the client-side process involves the following steps:

1. **Create the Message Hash**:

   - Combine the `validFor` timestamp and the signer's address.
   - Hash this combined data using keccak256.

2. **Apply Mycel-Specific Prefix**:

   - Prepend "\x19Mycel Signed Message:\n32" to the message hash.
   - Hash the result again with keccak256 to create the final message to be signed.

3. **Generate the Signature**:
   - Use the signer's private key to sign the prefixed and hashed message.

Here's a Go example to implement this process:

```go
package main

import (
	"crypto/ecdsa"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
)

func generateTimedSignature(validFor int64, privateKey *ecdsa.PrivateKey) (address common.Address, messageHash [32]byte, signature []byte, err error) {
	address = crypto.PubkeyToAddress(privateKey.PublicKey)

	// Step 1: Create the message hash
	// Combine validFor timestamp and signer's address, then hash with Keccak256
	messageHash = crypto.Keccak256Hash(
		common.LeftPadBytes(big.NewInt(validFor).Bytes(), 8),
		common.LeftPadBytes(address.Bytes(), 20),
	)

	// Step 2: Apply Mycel-specific prefix
	// Prepend "\x19Mycel Signed Message:\n32" and hash again
	prefixedMessage := fmt.Sprintf("\x19Mycel Signed Message:\n32%s", messageHash)
	prefixedMessageHash := crypto.Keccak256Hash([]byte(prefixedMessage))

	// Step 3: Generate the signature
	// Sign the prefixed message hash with the private key
	signature, err = crypto.Sign(prefixedMessageHash.Bytes(), privateKey)
	if err != nil {
		return common.Address{}, [32]byte{}, nil, err
	}

	// Adjust the v value of the signature (add 27)
	// This ensures compatibility with Mycel's signature standard
	signature[64] += 27

	return address, messageHash, signature, nil
}
```

For a complete implementation of these scripts, including additional helper functions and error handling, please refer to the full version available in the Astraeus repository:

[https://github.com/mycel-labs/astraeus/blob/main/scripts/e2e/main.go](https://github.com/mycel-labs/astraeus/blob/main/scripts/e2e/main.go)

## Endpoints

### Create Account

Creates a new transferable account. The account is created in a locked state by default.

- **URL**: `/accounts`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "proof": {
      "valid_for": 1234567890,
      "message_hash": "0x1234...",
      "signature": "0xabcd...",
      "signer": "0x5678..."
    }
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef...",
    "account_id": "0x9876..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts \
  -H "Content-Type: application/json" \
  -d '{"proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}}'
```

### Transfer Account

Transfers an account to a new owner. This operation can only be performed when the account is locked.

- **URL**: `/accounts/{account_id}/transfer`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    },
    "to": "0xffff..."
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876.../transfer \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}},"to":"0xffff..."}'
```

### Delete Account

Deletes an existing account. This operation can be performed regardless of the account's lock status.

- **URL**: `/accounts/{account_id}/delete`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    }
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876... \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}}}'
```

### Unlock Account

Unlocks a locked account. This operation can only be performed on a locked account.

- **URL**: `/accounts/{account_id}/unlock`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    }
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876.../unlock \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}}}'
```

### Approve Address

Approves an address for the account. This operation can only be performed when the account is locked.

- **URL**: `/accounts/{account_id}/approve`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    },
    "address": "0xaaaa..."
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876.../approve \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}},"address":"0xaaaa..."}'
```

### Revoke Approval

Revokes approval for an address. This operation can only be performed when the account is locked.

- **URL**: `/accounts/{account_id}/revoke`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    },
    "address": "0xaaaa..."
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876.../revoke \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}},"address":"0xaaaa..."}'
```

### Sign

Signs data using the account's private key. This operation can only be performed when the account is unlocked.

- **URL**: `/accounts/{account_id}/sign`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "base": {
      "account_id": "0x9876...",
      "proof": {
        "valid_for": 1234567890,
        "message_hash": "0x1234...",
        "signature": "0xabcd...",
        "signer": "0x5678..."
      }
    },
    "data": "0xffff..."
  }
  ```
- **Response**:
  ```json
  {
    "tx_hash": "0xdef...",
    "signature": "0xeeee..."
  }
  ```

**Example**:

```bash
curl -X POST http://localhost:8080/v1/accounts/0x9876.../sign \
  -H "Content-Type: application/json" \
  -d '{"base":{"account_id":"0x9876...","proof":{"valid_for":1234567890,"message_hash":"0x1234...","signature":"0xabcd...","signer":"0x5678..."}},"data":"0xffff..."}'
```

### Get Account

Retrieves account information. This operation can be performed regardless of the account's lock status.

- **URL**: `/accounts/{account_id}`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "account": {
      "account_id": "0x9876...",
      "owner": "0x5678...",
      "public_key_x": "0x1111...",
      "public_key_y": "0x2222...",
      "curve": 1,
      "is_locked": false
    }
  }
  ```

**Example**:

```bash
curl -X GET http://localhost:8080/v1/accounts/0x9876...
```

### Get IsApproved

Checks if an address is approved for the account. This operation can be performed regardless of the account's lock status.

- **URL**: `/accounts/{account_id}/approved/{address}`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "result": true
  }
  ```

**Example**:

```bash
curl -X GET http://localhost:8080/v1/accounts/0x9876.../approved/0xaaaa...
```

### Get IsOwner

Checks if an address is the owner of the account. This operation can be performed regardless of the account's lock status.

- **URL**: `/accounts/{account_id}/owner/{address}`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "result": true
  }
  ```

**Example**:

```bash
curl -X GET http://localhost:8080/v1/accounts/0x9876.../owner/0x5678...
```

### Get IsAccountLocked

Checks if the account is locked.

- **URL**: `/accounts/{account_id}/locked`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "result": false
  }
  ```

**Example**:

```bash
curl -X GET http://localhost:8080/v1/accounts/0x9876.../locked
```

## Data Structures

### TimedSignature

- `valid_for`: uint64 (Unix timestamp)
- `message_hash`: string (hex encoded)
- `signature`: string (hex encoded)
- `signer`: string (address)

### Account

- `account_id`: string
- `owner`: string (address)
- `public_key_x`: string (hex encoded)
- `public_key_y`: string (hex encoded)
- `curve`: enum (1 = ECDSA, 2 = EDDSA)
- `is_locked`: boolean

## Account Locking Mechanism

The TransferableAccountStore implements a locking mechanism for enhanced security. Here's how it affects various operations:

1. **Account Creation**: Accounts are created in a locked state by default.
2. **Locked State Operations**:
   - Transfer Account
   - Approve Address
   - Revoke Approval
     These operations can only be performed when the account is locked.
3. **Unlocked State Operations**:
   - Sign
     This operation can only be performed when the account is unlocked.
4. **State-Independent Operations**:
   - Delete Account
   - Get Account
   - Get IsApproved
   - Get IsOwner
   - Get IsAccountLocked
     These operations can be performed regardless of the account's lock status.
5. **Unlocking**: Only the account owner can unlock the account.

This locking mechanism adds an extra layer of security, ensuring that sensitive operations like transfers and approvals can only be performed in a locked state, while signing operations require the account to be unlocked.

## Error Handling

This API uses gRPC status codes to indicate the success or failure of a request. These status codes are mapped to HTTP status codes in the gRPC-Gateway. In case of an error, the response body will contain a JSON object with error details.

Example error response:

```json
{
  "code": 2,
  "message": "error occurred during transaction execution: transaction failed: execution reverted",
  "details": []
}
```

Common gRPC status codes and their HTTP equivalents:

- OK (0): 200 OK
- CANCELLED (1): 499 Client Closed Request
- UNKNOWN (2): 500 Internal Server Error
- INVALID_ARGUMENT (3): 400 Bad Request
- DEADLINE_EXCEEDED (4): 504 Gateway Timeout
- NOT_FOUND (5): 404 Not Found
- ALREADY_EXISTS (6): 409 Conflict
- PERMISSION_DENIED (7): 403 Forbidden
- UNAUTHENTICATED (16): 401 Unauthorized
- RESOURCE_EXHAUSTED (8): 429 Too Many Requests
- FAILED_PRECONDITION (9): 400 Bad Request
- ABORTED (10): 409 Conflict
- INTERNAL (13): 500 Internal Server Error

For detailed error messages, refer to the "message" field in the error response.

When handling errors in your client application, it's recommended to check the gRPC status code rather than the HTTP status code, as this provides more precise error information.
