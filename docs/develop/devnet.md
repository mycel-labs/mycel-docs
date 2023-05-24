---
sidebar_position: 3
---

# Devnet (Shugyo)

- HTTP API Console
  [http://shugyo.mycel.domains:1317/](http://shugyo.mycel.domains:1317/)
- RPC Endpoint
  [http://shugyo.mycel.domains:26657/](http://shugyo.mycel.domains:26657/)

## Install CLI

```
curl https://get.ignite.com/mycel-domain/mycel@latest! | sudo bash
```

Use `mycel [command] --help` for more information about a command.

## Edit Config File

Edit `~/.mycel/client.toml`

```toml
# The network chain ID
chain-id = "mycel-shugyo"
# The keyring's backend, where the keys are stored (os|file|kwallet|pass|test|memory)
keyring-backend = "test"
# CLI output format (text|json)
output = "text"
# <host>:<port> to Tendermint RPC interface for this chain
node = "tcp://shugyo.mycel.domains:26657"
# Transaction broadcasting mode (sync|async|block)
broadcast-mode = "block"
```

## Send Transactions or Queries

Eg. To query list of all registerd domains:

```
mycel q regisry list-domain
```

To refer other commands:
[Module](modules)
