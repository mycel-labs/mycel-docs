---
sidebar_position: 4
---

# Multi-chain Intent Pool

The Multi-chain Intent Pool acts as a nexus for user-submitted intents, facilitating a more efficient and direct pathway for executing cross-chain transactions without the need for intermediaries. By collecting intents from users wishing to perform transactions across various blockchains, the pool plays a pivotal role in the intent-resolution process.

![multi-chain-intent](../../assets/overview.png)

How It Works

1. Intent Submission: Users express their transaction desires by submitting intents to the pool. These intents specify the action they wish to accomplish, such as swapping tokens between different blockchains.

2. Intent Matching and Resolution: Within the pool, sophisticated algorithms and solvers analyze and match these intents with complementary intents from other users. This process ensures that transactions are not only feasible but also optimized for efficiency and security.

3. Sequencer Integration: Mycel's shared sequencer interacts with the Multi-chain Intent Pool to sequence and execute these matched intents. By leveraging Mycel's Tendermint-based blockchain for sequencing, the system ensures that transactions are processed in an orderly and secure manner.

4. Cross-Chain Execution: Utilizing multi-chain messaging protocols, such as Polymer, the sequencer communicates with escrow contracts deployed across the involved blockchains. This ensures that tokens or assets are securely locked in escrow until the transaction conditions are met, facilitating trustless and seamless exchanges.

Benefits

- Simplified Cross-Chain Transactions: By abstracting the complexities of cross-chain exchanges, the Multi-chain Intent Pool makes it easier for users to engage in multi-chain ecosystems.
- Increased Security and Efficiency: The intent-centric approach minimizes the potential for errors and enhances transaction security, as the system itself handles the intricacies of cross-chain communications.
- Enhanced User Experience: This feature aligns with Mycel's goal of making Web3 accessible to a broader audience by providing a user-friendly interface for complex blockchain operations.
