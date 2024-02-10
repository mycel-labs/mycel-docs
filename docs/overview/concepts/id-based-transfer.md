---
sidebar_position: 3
---

# ID-based Transfer

The ID-based Transfer feature of Mycel revolutionizes how tokens are transacted in the Web3 space. This feature allows users to send and receive tokens using just IDs, significantly enhancing privacy by keeping actual wallet addresses confidential.

Central to this system is the multi-chain sequencer, which, in conjunction with the [Multi-chain Intent Pool](/overview/concepts/multi-chain-intent-pool), enhances the efficiency and security of these ID-based transactions. This symbiotic relationship ensures that user intents for transactions are seamlessly matched and executed across different blockchain networks. The integration of the Multi-chain Intent Pool is vital, as it aggregates and processes these intents, enabling a fluid cross-chain transaction experience that was previously complex and cumbersome.

![id-based-transfer](../../assets/id-based-transfer.png)

1. Intent Submission by Alice:

   Alice selects "Send" and inputs her intent: "Send 100 USDC to Bob's Mycel ID on Polygon."  
   Alice approves the transfer of 100 USDC to an escrow smart contract on Ethereum, facilitated by Mycel. This step ensures the funds are securely held until the transaction across chains is verified.

2. Intent Processing by Mycel:

   Mycel identifies Alice's intent and begins the cross-chain transaction process. It ensures the escrow contract on Ethereum holds the 100 USDC and prepares for its release to Bob on Polygon.

3. Receiving Funds on Polygon:

   Bob receives a notification that 100 USDC is available for him on Polygon. He simply needs to confirm the receipt through his Mycel account.
   Upon confirmation, the funds are released from the escrow on Polygon, and Bob can access his 100 USDC.
