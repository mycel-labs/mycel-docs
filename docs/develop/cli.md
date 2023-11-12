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

Registers a new top-level domain:

```
myceld tx registry register-top-level-domain [name] [registration-period-in-year]
```

### register-second-level-domain

Registers a new second-level domain under a specified parent domain:

```
myceld tx registry register-second-level-domain [name] [parent] [registration-period-in-year]
```

### update-wallet-record

Updates the wallet address record for a domain:

```
myceld tx registry update-wallet-record [name] [parent] [wallet-record-type] [value]
```

### update-dns-record

Updates the DNS record for a domain:

```
myceld tx registry update-dns-record [name] [parent] [dns-record-type] [value]
```

### withdraw-registration-fee

Withdraws the registration fee for an owned domain:

```
myceld tx registry withdraw-registration-fee [name]
```

### extend-top-level-domain-expiration-date

Extends the expiration date of a top-level domain:

```
myceld tx registry extend-top-level-domain-expiration-date [name] [extension-period-in-year]
```

## Queries

### list-top-level-domain

Displays a list of all registered top-level domains:

```
myceld query registry list-top-level-domain
```

### list-second-level-domain

Displays a list of all registered second-level domains:

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

### show-top-level-domain

Queries domain records by a specified top-level domain name:

```
myceld q registry show-top-level-domain [tld name]
```

### show-second-level-domain

Queries domain records by a specified second-level domain name and its parent:

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

Displays a list of all domain ownerships:

```
myceld q registry list-domain-ownership
```

### show-domain-ownership

Queries domain ownership by the owner's address:

```
myceld q registry show-domain-ownership [owner]
```

### domain-registration-fee

Queries the registration fee for a domain:

```
myceld q registry domain-registration-fee [name] [parent] [registration-period-in-year]
```

Response:

```
fee:
  amount: string
```
