---
sidebar_position: 2
draft: true
---

# Validator / Node Setup

## Hardware Requirements

The minimum recommended specs for running Mycel Node as follows:

| Node Type  | CPU Cores(s) | Memory | SSD  |
| ---------- | ------------ | ------ | ---- |
| Validator  | 4            | 32GB   | 1TB+ |
| Full Node  | 2            | 16GB   | 1TB  |
| Light Node | 2            | 4GB    |      |

## Install Mycel Binary

To install the latest version of the Mycel binary use the following command.

```
curl https://get.ignite.com/mycel-domain/mycel@latest! | sudo bash
```

Or specific version like `v0.1.2`

```
curl https://get.ignite.com/mycel-domain/mycel@v0.1.2! | sudo bash
```

### Docker Images

[https://github.com/mycel-domain/mycel/pkgs/container/mycel](https://github.com/mycel-domain/mycel/pkgs/container/mycel)

## Configuration

Setup enviroment values

```
SEED_RPC={SEED_RPC_URL_HERE}
SEED_P2P={SEED_P2P_URL_HERE}
GENESIS_JSON={GENESIS_JSON_URL_HERE}
MONIKER={MONIKER_NAME_HERE}
CHAIN_ID={CHAIN_ID_HERE}
```

Initialize configuration files with

```
mycel init $MONIKER --chain-id $CHAIN_ID
```

Download `genesis.json`.

```
curl -L $GENESIS_JSON -o $HOME/.mycel/config/genesis.json
```

```
SEED_NODE_ID=$(curl $SEED_RPC/status | jq -r '.result.node_info.id')
sed -i "s/seeds = \"\"/seeds = \"${SEED_NODE_ID}@${SEED_P2P}\"/g" $HOME/.mycel/config/config.toml
sed -i "s/persistent_peers = \"\"/persistent_peers = \"${SEED_NODE_ID}@${SEED_P2P}\"/g" $HOME/.mycel/config/config.toml
```

### Setup statesync (Optional)

Get the latest height from seed.

```
SNAPSHOT_INTERVAL=500
LATEST_HEIGHT=$(curl -s $SEED_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - SNAPSHOT_INTERVAL))
TRUST_HASH=$(curl -s "$SEED_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
```

Update statesync configuration.

```
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SEED_RPC,$SEED_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|"  $HOME/.mycel/config/config.toml
```

## Running Node

### Manually

```
mycel start
```

Use `myceld [command] --help` for more information about a command.

### Using `systemd`

```
sudo vim /etc/systemd/system/mycel.service
```

```
[Unit]
Description=Mycel Daemon
After=network-online.target

[Service]
User=root
ExecStart={PATH_TO_MYCEL_BINARY} start --home {PATH_TO_CONFIG_DIR}
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
```

Enable service.

```
sudo systemctl daemon-reload
sudo systemctl enable mycel
```

## Become a Validator

Add your account to keyring

```
mycel keys add {ACCOUNT_NAME} --keyring-backend {KEYRING_NAME}
```

Register a Validator

```
mycel tx staking create-validator \
    --amount="100000umycel" \
    --pubkey=$(mycel tendermint show-validator) \
    --moniker=$MONIKER \
    --commission-rate="0.01" \
    --commission-max-rate="0.1" \
    --commission-max-change-rate="0.01" \
    --gas=200000 \
    --gas-prices="0.00025umycel" \
    --from={ACCOUNT_NAME} \
    --keyring-backend={KEYRING_NAME} \
    --min-self-delegation=1 \
    --chain-id=$CHAIN_ID
```
