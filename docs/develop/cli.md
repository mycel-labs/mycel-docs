---
sidebar_position: 2
---

# Command Line Tool

## Install

### CLI

```
curl https://get.ignite.com/mycel-domain/mycel@latest! | sudo bash
```

Use `mycel [command] --help` for more information about a command.

## Run Local Validator

Initialize private validator, p2p, genesis, and application configuration files

```
mycel init
```

Run the full node

```
mycel start
```

## Transactions

### register-top-level-domain

Register TopLevelDomain

```
myceld tx registry register-top-level-domain [name] [registration-period-in-year]
```

### register-second-level-domain

Register SecondLevelDomain

```
myceld tx registry register-second-level-domain [name] [parent] [registration-period-in-year]
```

### update-wallet-record

Update wallet address record

```
myceld tx registry update-wallet-record [name] [parent] [wallet-record-type] [value]
```

### update-dns-record

Update DNS record

```
myceld tx registry update-dns-record [name] [parent] [dns-record-type] [value]
```

## Queries

### list-second-level-domain

List all SLD domains

```
myceld q regisry list-second-level-domain
```

An example output:

```
domain:
- DNSRecords: {}
  expirationDate: "0"
  metadata: {}
  name: cel
  owner: ""
  parent: ""
  walletRecords: {}
- DNSRecords: {}
  expirationDate: "1711123442987026000"
  metadata: {}
  name: foo
  owner: cosmos1tk8gg20pcdp9alnnn6a84tdycf7pa2rjg8kwmc
  parent: cel
  walletRecords: {}
pagination:
  next_key: null
  total: "0"
```

### show-second-level-domain

Query domain records by domain

```
myceld q regisry show-second-level-domain [name] [parent]
```

exmaple:  
Query `foo.cel`

```
myceld q registry show-domain foo cel
```

Output:

```
domain:
  DNSRecords: {}
  expirationDate: "1711123442987026000"
  metadata: {}
  name: foo
  owner: cosmos1tk8gg20pcdp9alnnn6a84tdycf7pa2rjg8kwmc
  parent: cel
  walletRecords:
    ETHEREUM_MAINNET:
      WalletAddressFormat: ETHEREUM
      value: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
      walletRecordType: ETHEREUM_MAINNET
```

### list-domain-ownership

List all domain ownership

```
myceld q registry list-domain-ownership
```

### show-domain-ownership

Query domain ownership by owner

```
myceld q registry show-domain-ownership [owner]
```

### domain-registration-fee

Query domain registration fee

```
myceld q registry domain-registration-fee [name] [parent]
```

Response:

```
fee:
  amount: string
```

### is-registrable-domain

Query a domain is registrable

```
myceld q registry is-registrable-domain [name] [parent]
```

Response:

```
errorMessage: string
isRegstrable: bool
```

### domain-registration-fee

Query domain regsitration fee

```
myceld query registry domain-registration-fee [name] [parent]
```

### is-registrable-domain

Query a domain is registrable

```
myceld query registry is-registrable-domain [name] [parent]
```
