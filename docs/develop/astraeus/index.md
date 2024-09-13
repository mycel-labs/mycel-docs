# Astraeus

Astraeus is a sophisticated system for managing transferable accounts on a blockchain, providing secure and flexible account management capabilities.

## Overview

Astraeus implements a TransferableAccountStore smart contract that offers the following key features:

- Account creation, transfer, and deletion
- Advanced locking mechanism for enhanced security
- Approval system for delegated control
- Timed signature authentication
- Confidential operations using SUAVE's secure environment
- Support for multiple elliptic curves (currently ECDSA, with plans for EDDSA)

## Key Components

1. [API Specification](./spec.md)
2. [Technical Details](./technical_details.md)

## WIP: Quick Start

To interact with Astraeus, you can use the provided API endpoints. Here's a basic example of creating an account:

[WIP]

For more detailed information on available endpoints and their usage, please refer to the [API Specification](./spec.md).

## Security Features

Astraeus incorporates several security measures:

- Timed signatures for authentication
- Account locking mechanism
- Confidential operations for sensitive data
- Owner-specific privileges
- Approval system for delegated control

For in-depth information on these security features and their implementation, see the [Technical Details](./technical_details.md) document.

## Current Limitations

While Astraeus provides robust functionality, there are some current limitations:

- Potential for timed signature reuse within the validity period
- Limited support for elliptic curves (currently only ECDSA)

We are actively working on addressing these limitations. For more information, refer to the "Current Limitations and Future Improvements" section in the [Technical Details](./technical_details.md) document.

## Further Reading

- For a complete list of API endpoints and their usage, see the [API Specification](./spec.md).
- For in-depth technical information about the smart contract implementation and security features, refer to the [Technical Details](./technical_details.md).
