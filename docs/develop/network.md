---
sidebar_position: 4
---

# Networks

## Devnet

| Label               | Value                                                                      |
| ------------------- | -------------------------------------------------------------------------- |
| Chain ID            | mycel-dev                                                                  |
| Light Client Daemon | [http://seed.dev.mycel.domains:1317](http://seed.dev.mycel.domains:1317)   |
| RPC Endpoint        | [http://seed.dev.mycel.domains:26657](http://seed.dev.mycel.domains:26657) |

## Testnet

| Label               | Value                                                                            |
| ------------------- | -------------------------------------------------------------------------------- |
| Chain ID            | mycel-shugyo                                                                     |
| Light Client Daemon | [http://seed.shugyo.mycel.domains:1317](http://seed.shugyo.mycel.domains:1317)   |
| RPC Endpoint        | [http://seed.shugyo.mycel.domains:26657](http://seed.shugyo.mycel.domains:26657) |

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
