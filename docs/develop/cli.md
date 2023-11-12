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

### withdraw-registration-fee

Withdraw the registration fee for your owned domain:

```
myceld tx registry withdraw-registration-fee [domain name]
```

## extend-top-level-domain-expiration-date

Extend the expiration date of top-level domain:

```
myceld tx registry extend-top-level-domain-expiration-date [name] [extension-period-in-year]
```

## Queries

### list-top-level-domain

List all top-level domains

```
myceld query registry list-top-level-domain
```

### list-second-level-domain

List all second-level domains

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

## show-top-level-domain

Query domain records by top-level domain:

```
myceld q registry show-top-level-domain [tld name]
```

### show-second-level-domain

Query domain records by second-level domain:

```
myceld q regisry show-second-level-domain [sld name] [parent domain]
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

Query domain registration fee:

```
myceld q registry domain-registration-fee [name] [parent] [registration-period-in-year]
```

Response:

```
fee:
  amount: string
```
