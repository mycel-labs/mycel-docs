---
sidebar_position: 1
---

# Transferable Account

At the heart of Mycel’s infrastructure is the Transferable Account. A Transferable Account is a novel digital entity that allows users to securely manage, transfer, and trade assets across various blockchain platforms. Unlike traditional accounts, which are often tied to a single blockchain and operate within its constraints, Transferable Accounts are designed to be fluid, moving freely between different chains while maintaining the integrity and security of the assets they hold.

## Account Key Generation

In Mycel, each Transferable Account is associated with a unique cryptographic key, referred to as the account key. This key is generated within the secure confines of a Trusted Execution Environment (TEE) on a Mycel node. The TEE ensures that the key generation process is isolated from potential external threats, providing a secure foundation for managing user assets.
Encrypting Account Keys with TSS Keys

Once the account key is generated, it is crucial to protect this key from unauthorized access, particularly when it needs to be shared among different nodes in the network. To achieve this, the account key is encrypted using a Threshold Signature Scheme (TSS) key managed by the Mycel node set.

The encryption process works as follows:

1. Account Key Generation: The account key is generated securely within the enclave.
2. Encryption with TSS Key: The generated account key is then encrypted using a TSS key. This TSS key is a shared key that is distributed among a group of nodes, with the signature generation requiring cooperation from a subset of these nodes (the threshold).
3. Secure Distribution: The encrypted account key is securely distributed among the participating nodes, ensuring that it remains protected during transmission and storage.

![image](https://hackmd.io/_uploads/ByL5yeG5C.png)

### Key Generation

Mycel is a decentralized platform that aims to provide secure and private transactions while maintaining the integrity and verifiability of the system. One of the key components in achieving these goals is the use of threshold signatures, specifically the [Flexible Round-Optimized Schnorr Threshold (FROST) signature scheme](https://eprint.iacr.org/2020/852).

One of the primary reasons Mycel has chosen to employ FROST is its unique property of maintaining a fixed public key, even when the set of signers changes. In Mycel, users' assets are held in transferable account, each associated with a unique public key. The security and ownership of these TAs are distributed among a group of validators using FROST.

## Transfering Process

Transferable Accounts can be transferred or exchanged on any state machine. The Mycel node verifies these transactions and provides users with the necessary signatures. The two primary methods for verification are:

- Light Client Verification
  A light client of the relevant state machine is implemented within the TEE, where it verifies transactions and generates the necessary signatures for the Transferable Account.

- External Prover Verification
  An external prover generates proofs for the transactions, which are then verified within the TEE to ensure the integrity of the Transferable Account’s signature.
  ![image](https://hackmd.io/_uploads/rk81lwJcC.png)

## Receiving Account/Signature

The process involves four main steps:

1. Receive Signing Data from the User:
   A representative node receives the data that needs to be signed from the user.
2. Collect Signatures Using TSS:
   The representative node initiates a process to collect signatures from the Threshold Signature Scheme (TSS) setup across multiple nodes. Each node contributes its partial signature, which is then aggregated.
3. Decrypt Account Key and Sign Data:
   Once the signatures are collected, the representative node uses these signatures to decrypt the account's private key. The decrypted key is then used to sign the data, which is returned to the user.

![image](https://hackmd.io/_uploads/H1ZoZaF9R.png)

### Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant NodeA as Node A (Outside Enclave)
    participant EnclaveA as Node A (Enclave)
    participant NodeB as Node B (Outside Enclave)
    participant EnclaveB as Node B (Enclave)
    participant NodeC as Node C (Outside Enclave)
    participant EnclaveC as Node C (Enclave)

    %% Nonce Precomputation (before signing)
    rect rgb(191, 223, 255)
    EnclaveA->>NodeA: Precompute Nonce and Commitment
    EnclaveB->>NodeB: Precompute Nonce and Commitment
    EnclaveC->>NodeC: Precompute Nonce and Commitment
    end

    %% Signing Request and Commitment Broadcast
    rect rgb(255, 223, 191)
    User->>NodeA: Request Signing
    NodeA->>NodeB: Broadcast Precomputed Commitment
    NodeA->>NodeC: Broadcast Precomputed Commitment
    NodeB->>NodeA: Broadcast Precomputed Commitment
    NodeB->>NodeC: Broadcast Precomputed Commitment
    NodeC->>NodeA: Broadcast Precomputed Commitment
    NodeC->>NodeB: Broadcast Precomputed Commitment
    end

    %% Reveal Nonces
    rect rgb(255, 255, 191)
    NodeA->>EnclaveA: Reveal Precomputed Nonce
    EnclaveA->>NodeA: Send Revealed Nonce
    NodeA->>NodeB: Broadcast Revealed Nonce
    NodeA->>NodeC: Broadcast Revealed Nonce
    NodeB->>EnclaveB: Reveal Precomputed Nonce
    EnclaveB->>NodeB: Send Revealed Nonce
    NodeB->>NodeA: Broadcast Revealed Nonce
    NodeB->>NodeC: Broadcast Revealed Nonce
    NodeC->>EnclaveC: Reveal Precomputed Nonce
    EnclaveC->>NodeC: Send Revealed Nonce
    NodeC->>NodeA: Broadcast Revealed Nonce
    NodeC->>NodeB: Broadcast Revealed Nonce
    end

    %% Aggregate Nonces and Generate Partial Signatures
    rect rgb(223, 255, 191)
    NodeA->>EnclaveA: Aggregate Nonces
    EnclaveA->>NodeA: Send Aggregated Nonce
    NodeA->>EnclaveA: Compute Partial Signature
    EnclaveA->>NodeA: Send Partial Signature
    NodeA->>NodeB: Send Partial Signature
    NodeA->>NodeC: Send Partial Signature

    NodeB->>EnclaveB: Aggregate Nonces
    EnclaveB->>NodeB: Send Aggregated Nonce
    NodeB->>EnclaveB: Compute Partial Signature
    EnclaveB->>NodeB: Send Partial Signature
    NodeB->>NodeA: Send Partial Signature
    NodeB->>NodeC: Send Partial Signature

    NodeC->>EnclaveC: Aggregate Nonces
    EnclaveC->>NodeC: Send Aggregated Nonce
    NodeC->>EnclaveC: Compute Partial Signature
    EnclaveC->>NodeC: Send Partial Signature
    NodeC->>NodeA: Send Partial Signature
    NodeC->>NodeB: Send Partial Signature
    end

    %% Aggregate Partial Signatures and Finalize
    rect rgb(223, 191, 255)
    NodeA->>EnclaveA: Aggregate Partial Signatures
    EnclaveA->>NodeA: Send Final Signature
    NodeA->>User: Return Final Signature
    end
```

1. Nonce Precomputation (before signing):
   Nonces and their commitments are precomputed and stored within the enclaves of each node, ready for use when a signing request is made.
2. Signing Request and Commitment Broadcast:
   The user initiates the signing process by sending a request. The nodes then broadcast their precomputed commitments to each other to establish the basis for nonce revelation.
3. Reveal Nonces:
   After commitments are received, each node reveals its precomputed nonce. These nonces are then broadcast to other nodes for aggregation.
4. Aggregate Nonces and Generate Partial Signatures:
   Nonces are aggregated inside each node's enclave, and partial signatures are generated using these aggregated nonces and each node's key share.
5. Aggregate Partial Signatures and Finalize:
   The final step involves aggregating the partial signatures within the enclave to produce the final signature, which is then returned to the user.

## State Transition

```mermaid
 stateDiagram-v2
    [*] --> Locked: CreateAccount()
    Locked--> ApprovedWithLock: ApproveAccount()
    Locked --> Unlocked: UnlockAccount()
    ApprovedWithLock --> Locked: RevokeAccount()
    ApprovedWithLock --> Unlocked: UnlockAccount()
    Unlocked --> Signed: RequestSign()
    Unlocked --> SignedAndDeleted: SignAndDeleteAccount()
    Unlocked --> Locked: LockAccount()
    Signed --> Unlocked

```

### `CreateAccount(owner)`

Create a traferable account Returns the public key of transferable account which is created

### `LockAccount(id, duration)`

Lock the transferable account

### `LockAccount(id, duration, to)`

Lock the transferable account and approve unlocking

### `UnlockAccount(id)`

Unlock the transferable account

### `ApproveAccount(id, to)`

Approve unlocking the transferable account to the party

### `RevokeApproval(id, to)`

Revoke the approval to unlocking the transferable account

### `RequestSign(id, data)`

Request a signature of the transferable account

### `RequestSignAndDeleteAccount(id, data)`

Request a signature of the transferable account and delete the key
