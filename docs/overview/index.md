---
sidebar_position: 1
---

# Introduction

## What is Mycel?

Mycel is an intent-centric interface to solve complexity in multi-chain and bring bilion users for Web3 by eliminating the need for them to understand complex blockchain concepts like gas fees and transactions.

By adopting Mycel's intent-centric interface, protocols like Restaking Protocols and Decentralized Exchanges (DEX) can provide a user-friendly experience, where actions are reduced to simple intents that hide the complex details of blockchain operations.
This approach enables a broader range of applications to become more user-friendly, inviting a vast new audience to explore.

## What is Intent?

In the context of software and blockchain technologies, an "intent" refers to a user's declared goal or desired outcome without specifying the procedural steps needed to achieve that outcome. It's a high-level declaration of what the user wants to do, such as sending tokens to someone, purchasing an item, or accessing a service. The concept of intent abstracts away the complexity of the operations required to fulfill these desires, focusing instead on the end result that the user wants to achieve.

For example, Intent: "I want to swap 1 ETH on Ethereum for SOL on Solana."

Traditional Method:

1. Find a Bridge Protocol: Alice must search for a bridge protocol that supports both ETH and SOL.
2. Connect Wallet: Alice connects their EVM and Solana wallet to the bridge protocol, ensuring it contains at least 1 ETH.
3. Select Swap Pair: Alice selects ETH in the "From" field and SOL in the "To" field.
4. Enter Alicemount: Alice enters the amount of 1 ETH they wish to swap.
5. Review Bridge Rate: Alice reviews the current ETH to SOL swap rate and any associated fees.
6. Confirm Bridge: Alice confirms the swap details, sets the gas fee, and signs the transaction.
7. Transaction Execution: Alice waits for the transaction to be processed and the SOL to be deposited into their Solana wallet.

Intent-Centric Approach:

1. Declare Intent: Alice simply states, "Swap 1 ETH for SOL."
2. Platform Processes Intent: The Mycel platform interprets this intent and automatically selects the best available DEX for the swap.
3. Automatic Swap Execution: Mycel handles all aspects of the swap, including:
   Connecting Alice's wallets.
   Finding the best swap rate.
   Setting an optimal gas fee.
   Executing the transaction.
4. Completion: Alice is notified once the swap is successful, with the SOL now in their wallet, without having to manually navigate through the swap process.

The intent-centric approach simplifies the user experience by abstracting away the detailed steps involved in executing a token swap. This method allows users like A to focus on their desired outcome, relying on the platform to handle the complexities of blockchain transactions.

## What is an Intent-Centric Interface?

An intent-centric interface, as exemplified by Mycel, is a design paradigm that prioritizes these user intents in the interaction model. Instead of requiring users to understand and navigate the complex processes underlying their actions (such as blockchain transactions), an intent-centric interface allows users to simply state their "intent" and relies on the system to figure out how to execute it. This approach significantly simplifies the user experience, making technology like blockchain more accessible and user-friendly.
How Mycel Implements an Intent-Centric Interface

Mycel leverages the intent-centric model to enhance interactions within the blockchain ecosystem, particularly focusing on identity and transaction management. Here’s how Mycel embodies this approach:

- **Simplified Digital Identity**: Mycel facilitates the creation of multi-chain wallets using familiar authentication methods such as biometric identifiers or Google Authentication. By simply expressing the intent to create a multi-chain wallet linked to their Mycel ID, users can effortlessly initiate the process. Mycel then automates the intricate steps involved, from generating the wallet to securely associating it with the user's digital identity across various blockchain networks.

- **ID-Based Transfer**: Mycel allows users to perform transactions using domain names instead of complex blockchain addresses. Users express an intent like “send tokens to domain.name,” and Mycel handles the resolution and execution of these transactions, abstracting away the technicalities.

- **Multi-Chain Operations**: By supporting intents that span across multiple blockchains, Mycel facilitates a seamless experience for users wanting to interact with different blockchain ecosystems without worrying about the specifics of each chain.
