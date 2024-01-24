---
sidebar_position: 3
---

# Node

## Run Local Node with CLI

Install CLI

```
curl https://get.ignite.com/mycel-domain/mycel@latest! | sudo bash
```

Use `mycel [command] --help` for more information about a command.

Initialize private validator, p2p, genesis, and application configuration files

```
mycel init
```

Run the full node

```
mycel start
```

## Run Local Node With Docker

### Single Node

Clone Repository

```
git clone git@github.com:mycel-domain/mycel.git
cd mycel
```

Build

```
docker build . -t mycel -f dockerfile-node
```

Run

```
docker run -it --rm \
    -p26657:26657 \
    -p1317:1317 \
    -p4500:4500 \
    -v ~/.mycel:/root/.mycel \
    mycel
```

You can generate your `~/.mycel` config directory with `ignite chain init`

### Multiple Nodes

#### Setup node1 using `docker compose`:

```
docker compose up
```

#### Setup node2:

Initialize node2

```
docker compose exec node2 myceld init node2
```

Copy genesis.json

```
docker compose cp node1:/root/.mycel/config/genesis.json /tmp/genesis.json
docker compose cp /tmp/genesis.json node2:/root/.mycel/config/genesis.json
```

Update config.toml

```
docker compose exec node2 sed -i "s/persistent_peers = \"\"/persistent_peers = \"$(docker compose exec node1 myceld tendermint show-node-id)@node1:26656\"/g" /root/.mycel/config/config.toml
```

Setup key

```
docker compose exec node2 myceld keys add validator
NODE2_ADDR=$(docker compose exec node2 myceld keys show validator --output json | jq -r '.address') # enter password
```

Send stake token from node1

```
docker compose exec node1 myceld tx bank send alice $NODE2_ADDR 50000000stake
```

Stake

```
docker compose exec node2 myceld tx staking create-validator \
    --amount 50000000stake \
    --from validator --pubkey=$(docker compose exec node2 myceld tendermint show-validator) \
    --moniker="node2" \
    --commission-rate="0.1" \
    --commission-max-rate="0.2" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="50000000" \
    --node tcp://node1:26657
```

Check validators

```
docker compose exec node1 myceld q staking validators
```

Start node2

```
docker compose exec node2 myceld start
```
