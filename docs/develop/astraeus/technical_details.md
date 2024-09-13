# Technical Details

This document provides in-depth technical information about the Astraeus, including details about the smart contract implementation and important security features.

## Smart Contract: TransferableAccountStore

The core of the Astraeus is the TransferableAccountStore smart contract. This contract manages transferable accounts with a sophisticated locking mechanism and various security features.

### Key Features

1. **Account Management**:

   - Creates, stores, and retrieves accounts
   - Each account has a unique ID, owner address, public key coordinates, and lock status

2. **Locking Mechanism**:

   - Accounts can be locked or unlocked
   - Certain operations are restricted based on the lock status
   - Provides an additional layer of security for sensitive operations

3. **Owner Privileges**:

   - Account owners have special rights regardless of lock status
   - Can delete the account or unlock it at any time

4. **Approval System**:

   - Owners can approve other addresses to perform certain actions
   - Allows delegation of control without transferring ownership
   - Approvals can be revoked

5. **Timed Signatures**:

   - All state-changing operations require a timed signature for authentication
   - Ensures requests are recent and prevents replay attacks. (For current limitations and potential future improvements regarding this feature, please refer to the [Current Limitations and Future Improvements](#current-limitations-and-future-improvements) section.)

6. **Public Key Management**:

   - Stores public key information (x and y coordinates)
   - Supports different elliptic curves (currently ECDSA, with plans to support EDDSA in the future)

7. **Confidential Operations**:

   - Account creation and signing are processed in SUAVE's confidential environment
   - Involves sensitive data handling not visible on-chain

8. **Private Key Handling**:

   - Private keys are generated and stored securely using SUAVE's confidential store
   - Never exposed directly in the contract's public state

9. **Signature Verification**:
   - Includes method to verify timed signatures
   - Crucial for the security of all authenticated operations

## Detailed Operation Descriptions

### Account Creation

- Creates a new account in a locked state
- Generates a new private key securely
- Stores the private key in SUAVE's confidential store
- Calculates and stores the corresponding public key

### Account Transfer

- Can only be performed when the account is locked
- Requires approval or ownership
- Resets all existing approvals after transfer

### Account Deletion

- Can be performed regardless of lock status
- Only the owner can delete an account

### Unlocking an Account

- Changes the account state from locked to unlocked
- Only the owner can unlock an account

### Approving an Address

- Can only be done when the account is locked
- Allows the approved address to perform certain actions

### Revoking Approval

- Can only be done when the account is locked
- Removes the ability of a previously approved address to act on the account

### Signing Data

- Can only be performed when the account is unlocked
- Uses the securely stored private key to sign data
- The private key never leaves the secure storage

## Security Considerations

1. **Timed Signatures**: All state-changing operations require a timed signature, adding a layer of security against replay attacks. (For current limitations and potential future improvements regarding this feature, please refer to the [Current Limitations and Future Improvements](#current-limitations-and-future-improvements) section.)

2. **Locking Mechanism**: Sensitive operations are only allowed in specific lock states, providing an additional security layer.

3. **Confidential Operations**: Sensitive operations like key generation and signing are performed confidentially, protecting against on-chain data exposure.

4. **Approval System**: Allows for fine-grained control over who can perform actions on an account.

5. **Owner Controls**: Account owners retain ultimate control, being able to delete or unlock their accounts at any time.

## Cryptographic Details

- Uses elliptic curve cryptography for key generation and signing
- Supports both ECDSA and EDDSA curves (currently ECDSA, with plans to support EDDSA in the future)
- Curve parameters are hardcoded in the contract for consistency

## Integration Considerations

When integrating with the Astraeus:

1. Ensure proper handling of timed signatures for all state-changing operations
2. Be aware of the account lock status and its implications on available operations
3. Utilize the approval system for delegating account control when needed
4. Monitor emitted events for tracking account state changes
5. Handle confidential operations appropriately, ensuring sensitive data remains secure

## Current Limitations and Future Improvements

While the Astraeus provides robust security features, there are some current limitations that are being addressed:

### Timed Signature Reuse

1. **Current Limitation**:

   - Timed signatures can potentially be reused within their validity period.
   - There's a risk of third-party interception and unauthorized use of these signatures.

2. **Planned Improvement**:

   - We are considering implementing a nonce-based management system for signatures.
   - This approach aims to establish a clear one-to-one correspondence between signatures and individual requests.

3. **Interim Approach**:

   - In the initial development phase, we acknowledge and accept these limitations.
   - Users should be aware of the potential risks associated with signature reuse.

4. **Ongoing Development**:

   - We are actively working on enhancing the security of our signature system.
   - Regular updates will be released to address these concerns and improve overall system security.

5. **Best Practices for Users**:
   - Until these improvements are implemented, users are advised to:
     - Generate new timed signatures for each request when possible.
     - Keep the validity period of signatures as short as practically feasible.
     - Monitor account activity closely for any unauthorized operations.

We are committed to continuously improving the security and efficiency of the Astraeus system. Users and developers will be notified of significant updates addressing these limitations.
