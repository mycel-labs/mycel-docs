# Registry

## Abstract

Registry module provides the following feature:

- Register domains
- Update name records

## Stores

[proto/mycel/registry](https://github.com/mycel-domain/mycel/tree/main/proto/mycel/registry)

## Events

Registry module emits the following events:

### RegisterDomain

Event Type: `register-domain`  
Attributes:

- `name`: Domain name
- `parent`: Domain parent
- `registration-period-in-year`: Registration period in year
- `expiration-date`: Expiration date in Unix time
- `domain-level`: Domain level

### UpdateWalletRecord

Event Type: `update-wallet-record`  
Attributes:

- `name`: Domain name
- `parent`: Domain parent
- `wallet-record-type`: Wallet record type
- `value`: Wallet address

### UpdateDNSRecord

Event Type: `update-dns-record`  
Attributes:

- `name`: Domain name
- `parent`: Domain parent
- `dns-record-type`: Wallet record type
- `value`: Wallet address

## Transactions

### register-domain

Register domain to mycel

```
myceld tx registry register-domain [name] [parent] [registration-period-in-year]
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
