---
sidebar_position: 1
---

# Introduction

## What is mycel?

mycel is a decentralized name service that can resolve domains and wallet addresses.
mycel supports name resolution in DNS, IBC, and smart contracts on supported chains.  
It is also integrated with other blockchain name services such as [Ethereum Name Service (ENS)](https://ens.domains).
For example, by connecting your ENS domain to mycel, you can resolve your ENS domain (not only Ethereum addresses, but also Bitcoin, Cosmos, Aptos, and more) from other supported chains, or resolve your website by adding DNS records.

## Multichain Integration

mycel supports reading and writing name records from other blockchain networks:

- Ethereum and other EVM compatible chains
- IBC Supported chains

And this enables seamless integration with various name services:

- Ethereum Name Service (ENS)
- Inter-Chain Name Service (ICNS)

## Supported Records

mycel supports a variety of record types to cater to different user needs:

- Domain Name System (DNS) records
- Wallet address records
- Metadata records, which can store any custom data

![overview](../assets/overview.svg)

## Motivation

Existing name service are operated as dApps on each chain, but they lack interoperability with other chains and managed by single govenance entity on each chain.

Our motivation is to build a "Domain Management Ecosystem" by managing domains in a decentralized manner on a network aimed at name resolution, making them accessible from multiple protocols to solve these problems.

This project aims to expand the ecosystem by integrating existing name services (such as ENS on Ethereum), adopting common token standards (ERC721, ADR43), and messaging protocols for interoperability (e.g., IBC) to improve utility and liquidity.
