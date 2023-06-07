---
sidebar_position: 1
---

# Introduction

## What is mycel?

mycel is a **Decentralized Name Service Infrastracture** that can resolve website, wallet, IPFS, and any addresses.
mycel supports name resolution in DNS, IBC, and smart contracts on supported chains.  
It is also integrated with other blockchain name services such as [Ethereum Name Service (ENS)](https://ens.domains).
For example, by connecting your ENS domain to mycel, you can resolve your ENS domain (not only Ethereum addresses, but also Bitcoin, Cosmos, Aptos, and more) from other supported chains, or resolve your website by adding DNS records.

![overview](../assets/overview.svg)

Existing name service are operated as dApps on each chain, but they lack interoperability with other chains and managed by single govenance entity on each chain.

Our motivation is to build a "Domain Management Ecosystem" that manages domains on a decentralized network aimed at name resolution, making them accessible from multiple protocols to solve these problems.

This project aims to expand the ecosystem by integrating existing name services, adopting common token standards (ERC721, ADR43), and messaging protocols for interoperability (e.g., IBC) to improve utility and liquidity.

## Why mycel?

### Customizable Domains

mycel offers a tiered domain registration system including Top-Level Domains (TLDs), Second-Level Domains (SLDs).
This system is attractive to organizations with communities seeking more flexible and customizable naming services.
Once you have staked a certain amount of tokens on a mycel node, you can issue a TLD for your community or organization.
[See more](domain-registration)

### Multiple Protocols Support

mycel caters to different user needs by supporting various protocols and a range of record types.
Supported record types:

- Domain Name System (DNS) records
- Wallet addresses
- IPFS addresses
- Metadata records, which can store any custom data

And, you can resolve domains via the following protocols:

- Domain Name Service (DNS)
- Inter‑Blockchain Communication Protocol (IBC)
- Name Service Contract(EVM)
- RPC

You will be able to manage complex addresses with one domain.
[See more](name-resolution)

### Interoperability

mycel supports communicate with other blockchain network like:

- Ethereum and other EVM compatible chains
- IBC Supported chains

It possible to register and resolve domains, and update records from various blockchain network.

And this enables seamless integration with various name services:

- Ethereum Name Service (ENS)
- Inter-Chain Name Service (ICNS)  
  ...

This integration can increase utility for users who have existing domains on those services or want to access features provided by them

### Incentives and Governance for Participation

mycel incentives network participants, such as validators and delegators, by distributing domain registration fees among them, rewarding them for their contributions to maintaining the network.

The domain registration fees collected during each period are distributed among validators and delegators as a form of reward for their contributions to the mycel network.
This incentives network participants to actively engage in maintaining the security and stability of the platform.
[See more](incentives)

### Smart Contracts

You can build and deploy dApps(CosmWasm smart contracts) on mycel like:

- Community Management Tools
- Decentralized Identifiers(DID) Protocols
- Decentralized Exchanges  
  ...
