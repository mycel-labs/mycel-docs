---
sidebar_position: 1
---

# Cross-Chain Transactions

Cross-chain transactions, or the process of transferring assets between different blockchain networks, traditionally involve complex steps and a deep understanding of the intricacies of each network involved. Mycel significantly simplifies this process through its intent-centric approach and ID-based transfers.

Example: **Alice Wants to Send USDC to Bob on Solana**

## Traditional Approach

1. **Alice's Preparation**: Alice has ETH on Ethereum she wants to send to Bob, who prefers to receive it as SOL on Solana.
2. **Finding a Bridge**: Alice searches for a reliable cross-chain bridge service that supports ETH to SOL transactions.
3. **Bridge Transaction**: Alice connects her Ethereum wallet to the bridge, deposits ETH, selects the Solana network for the output, and inputs Bob's Solana wallet address.
4. **Fees and Waiting**: Alice pays transaction fees on Ethereum and possibly bridge fees. She then waits for the bridge to process the transaction and for SOL to be deposited into Bob's Solana wallet.

## With Mycel's Intent-Centric Approach

![id-based-transfer](../../assets/id-based-transfer.png)

1. **Expressing Intent**: Alice logs into Mycel and states her intent: "Send ETH as SOL to bob.cel" — a simplified ID that represents Bob's receiving address on Solana.
2. **Mycel Handles the Details**: The Mycel platform automatically identifies the necessary steps. It securely locks Alice's ETH in an escrow contract on Ethereum, interacts with a cross-chain mechanism to swap ETH for SOL, and directs the SOL to the specified Mycel ID linked to Bob's Solana address.
3. **Seamless Execution**: The entire process is managed by Mycel, from securing the best exchange rate for ETH to SOL conversion to ensuring the SOL is deposited into Bob's Solana wallet associated with his Mycel ID. Alice pays a transparent fee, likely lower than combining separate transaction and bridge fees.
4. **Confirmation to Both Parties**: Alice and Bob receive notifications about the transaction's completion. Bob accesses his SOL on Solana directly, without needing to manage or even know the Ethereum transaction details.
