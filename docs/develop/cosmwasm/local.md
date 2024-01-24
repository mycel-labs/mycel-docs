# Local Development

## Run Local Node with Docker

Clone Mycel chain repo

```
git clone https://github.com/mycel-domain/mycel
```

Run local node

```
docker compose build
docker compose up
```

for Apple Silicon

```
make docker-compose-build-arm
make docker-compose-up-arm
```

## Deploy CW20(Fungible Token) Contract

### Compile Sample Contract

Clone `cw-plus`

```
git clone https://github.com/CosmWasm/cw-plus.git
cd cw-plus
```

```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/optimizer:0.15.0
```

for Apple Silicon

```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/optimizer-arm64:0.15.0
```

### Upload Contract

```
cd artifacts
```

Store CW20(Fungible Tokens) contract
Reference: [https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/README.md](https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/README.md)

```
RES_STORE=$(myceld tx wasm store cw20_base-aarch64.wasm --from alice --gas auto --gas-adjustment 1.3 --output json -y)
```

Get the transaction hash

```
TX_STORE=$(echo $RES_STORE | jq -r '.txhash')
```

Get `code-id`

```
CODE_ID=$(myceld q tx $TX_STORE --output json | jq -r '.logs[0].events[-1].attributes[1].value')
```

### Initialize Contract

Create request body to initialize

```
MY_ADDRESS=$(myceld keys show alice --output json | jq -r '.address')
TOKEN_NAME=SampleToken
TOKEN_SYMBOL=SAMP

INIT=$(jq -n --arg name "$TOKEN_NAME" --arg symbol "$TOKEN_SYMBOL" --arg address "$MY_ADDRESS" '{"name":$name,"symbol":$symbol,"decimals":6,"initial_balances":[{"address":$address,"amount":"10000000"}]}')

```

Initialize the contract

```
RES_INIT=$(myceld tx wasm instantiate "$CODE_ID" "$INIT" --label "$TOKEN_NAME" --admin alice --from alice -y --output json)
```

Get the transaction hash

```
TX_INIT=$(echo $RES_INIT | jq -r '.txhash')
```

Get contract address

```
CONTRACT_ADDRESS=$(myceld q tx $TX_INIT --output json | jq -r '.logs[0].events[-1].attributes[0].value')
```

Create query body

```
BALANCE=$(jq -n --arg address "$MY_ADDRESS" '{"balance":{"address": $address}}')
```

Query balance

```
myceld q wasm cs smart "$CONTRACT_ADDRESS" "$BALANCE"
```
