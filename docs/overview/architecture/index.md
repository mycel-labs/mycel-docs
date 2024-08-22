---
sidebar_position: 4
---

# Architecture

The architecture of Mycel is meticulously designed to support decentralized asset management across multiple blockchain platforms. This section delves into the two key components of Mycel's architecture, **Astraeus** and **Cordyceps**, which represent different stages of development and the evolution of account management capabilities within the system.

## Astraeus

Astraeus represents the foundational stage of Mycel's architecture, focusing on the implementation of Transferable Accounts. This phase is centered on establishing the core functionality that allows assets to move securely and efficiently across different blockchain platforms.

- Transferable Accounts with SUAVE: In this phase, the Transferable Account system is prototyped and tested within a controlled environment using SUAVE. The goal is to establish a reliable mechanism for moving and managing assets across different blockchain platforms.
- API Specification and Integration: Astraeus also involves defining and refining the API specifications that will allow developers to interact with the Mycel infrastructure. This API will form the backbone of all future development, ensuring that Mycel’s core functionalities are accessible and well-documented.
- Interoperability Testing: During this stage, initial tests are conducted to ensure that Transferable Accounts can operate smoothly across various blockchain platforms, validating the concept of cross-chain asset management.

## Cordyceps

Cordyceps builds upon the foundation laid by Astraeus and introduces the concept of Programmable Accounts. This stage is where Mycel’s architecture becomes more advanced, allowing users to define and enforce custom conditions for asset management and transfer.

- Programmable Accounts with TEE Integration: Cordyceps focuses on integrating Trusted Execution Environments (TEEs) with Programmable Accounts. TEEs provide a secure environment within each node where programmable conditions can be executed without exposure to external threats. This ensures that users' custom logic and conditions for asset transfers are enforced securely and reliably.
- Light Client Network: Alongside TEE integration, Cordyceps also implements a Light Client Network that functions like a sidecar to the main blockchain networks. This network allows Mycel to verify transactions and enforce conditions efficiently across multiple blockchains without requiring full node operations, enhancing scalability and reducing resource consumption.
- Advanced Security and Flexibility: By combining the programmability of accounts with the security of TEEs and the efficiency of a Light Client Network, Cordyceps enables users to create highly customized and secure asset management strategies. Whether it’s setting up multi-signature requirements, time-based restrictions, or complex conditional transfers, Cordyceps provides the tools necessary for sophisticated decentralized applications.
