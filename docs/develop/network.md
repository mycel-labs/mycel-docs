---
sidebar_position: 4
---

# Networks

## Testnet

- Light Client Daemon
  [https://lcd.shugyo.mycel.domains/](https://lcd.shugyo.mycel.domains/)
- RPC Endpoint
  [https://rpc.shugyo.mycel.domains/](https://rpc.shugyo.mycel.domains/)

### CLI Configuration

Edit `~/.mycel/client.toml`

```toml
# The network chain ID
chain-id = "mycel-shugyo"
# The keyring's backend, where the keys are stored (os|file|kwallet|pass|test|memory)
keyring-backend = "test"
# CLI output format (text|json)
output = "text"
# <host>:<port> to Tendermint RPC interface for this chain
node = "https://rpc.shugyo.mycel.domains/"
# Transaction broadcasting mode (sync|async|block)
broadcast-mode = "block"
```
