---
sidebar_position: 1
---

# Introduction of Mycel

## What is Mycel?

Mycel is a decentralized platform that enables the transfer, management, and trading of various accounts across different blockchain platforms. It allows users to create a **"Transferable Account"** that combines their own account with a threshold signature scheme (TSS) signed by validators on Mycel. Mycel is built with Cosmos SDK and Tendermint.

Mycel enables you to:

- Exchange assets across different blockchain platforms
- Transfer assets on any chain from smart contracts or rollups on any other chain
- Buy and sell accounts tied to specific activities

## Architecture

Mycel's decentralized architecture ensures that no single party has control over the transferable account or the assets within it, maintaining the security and integrity of the users' assets.

### Transferable Account

A Transferable Account (TA) on Mycel is a specialized account structure designed to facilitate secure, cross-chain asset management and transfer. It operates using a 2-of-2 multi-signature mechanism, ensuring that both the user and the validators collectively control the account. This design enhances security and decentralization, as no single party can unilaterally control the account or its assets.

![ta](../assets/ta.png)

**Alice**: A user.  
**TSS Account**: An account operated by validators.  
**Transferable Account**: An account on Mycel managed by a 2-of-2 multi-signature, consisting of Alice and the TSS account.
