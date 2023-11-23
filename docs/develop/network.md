---
sidebar_position: 4
---

# Networks

## Devnet

| Label               | Value                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| Chain ID            | mycel-dev                                                                                       |
| RPC Endpoint        | [https://rpc.dev.mycel.domains/](https://rpc.dev.mycel.domains/)                                |
| Light Client Daemon | [https://lcd.dev.mycel.domains/](https://lcd.dev.mycel.domains/)                                |
| Genesis             | [genesis.json](https://github.com/mycel-domain/mycel/releases/download/v0.1.1/dev_genesis.json) |

## Testnet

| Label               | Value                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Chain ID            | mycel-shugyo                                                                                       |
| RPC Endpoint        | [https://rpc.shugyo.mycel.domains/](https://rpc.shugyo.mycel.domains/)                             |
| Light Client Daemon | [https://lcd.shugyo.mycel.domains/](https://lcd.shugyo.mycel.domains/)                             |
| Genesis             | [genesis.json](https://github.com/mycel-domain/mycel/releases/download/v0.1.1/shugyo_genesis.json) |

### CLI Configuration

Edit `~/.mycel/client.toml`

```toml
# The network chain ID
chain-id = CHAIN_ID
# The keyring's backend, where the keys are stored (os|file|kwallet|pass|test|memory)
keyring-backend = "test"
# CLI output format (text|json)
output = "text"
# <host>:<port> to Tendermint RPC interface for this chain
node = RPC_ENDPOINT
# Transaction broadcasting mode (sync|async|block)
broadcast-mode = "block"
```
