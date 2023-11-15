# Registry

## Abstract

Registry module provides the following feature:

- Register domains
- Update name records

## Stores

[proto/mycel/registry](https://github.com/mycel-domain/mycel/tree/main/proto/mycel/registry)

## Events

Registry module emits the following events:

### `types.EventTypeRegisterTopLevelDomain`

This event is emitted after a top-level domain is successfully registered and is part of a system for managing domain registrations. It is triggered by the `EmitRegisterTopLevelDomainEvent` function.

#### Attributes:

- `name`
  - The value is the name of the registered top-level domain.
- `expiration-date`
  - The value is the expiration date of the domain registration.
- `max-subdomain-registrations`
  - The value is the maximum number of subdomain registrations allowed under this domain.
- `total-registration-fee`
  - The value is the total fee paid for registering the top-level domain.
- `burn-weight`
  - This value represents the weight of the fee that will be burned. The burn weight is calculated using a formula that accounts for the rate of staking and the rate of inflation in the system, as detailed in the [Mycel Documentation](https://docs.mycel.domains/overview/tokenomics#calculating-the-burn-amount).
- `registration-fee-to-burn`
  - The value is the portion of the registration fee that will be burned, based on the burn weight.
- `registration-fee-to-treasury`
  - The value is the portion of the registration fee that will be directed to the treasury.

This event captures key details of the registration of a top-level domain, including financial aspects and domain limits.

### `types.EventTypeRegisterSecondLevelDomain`

This event is emitted following the successful registration of a second-level domain as part of a domain management system. It is triggered by the `EmitRegisterSecondLevelDomainEvent` function.

#### Attributes:

- `name`
  - The value is the name of the registered second-level domain.
- `parent`
  - The value is the parent domain of the registered second-level domain.
- `expiration-date`
  - The value is the expiration date of the second-level domain registration.
- `registration-fee`
  - The value is the fee paid for registering the second-level domain.

This event captures key details of the registration of a second-level domain, including its relationship to the parent domain and financial details.

### `types.EventTypeUpdateWalletRecord`

This event is emitted when a wallet record is updated, as part of a system managing wallet records. It is triggered by the `EmitUpdateWalletRecordEvent` function.

#### Attributes:

- `name`
  - The value is the name of the domain associated with the wallet record being updated.
- `parent`
  - The value is the parent domain of the domain associated with the wallet record.
- `wallet-record-type`
  - The value indicates the type of wallet record being updated.
- `value`
  - The value is the new or updated information in the wallet record.

This event captures key details of wallet record updates, including the domain name and parent, the type of record being updated, and the new value of the record.

### `types.EventTypeUpdateDnsRecord`

This event is emitted when a DNS record is updated within a domain management system. It is triggered by the `EmitUpdateDnsRecordEvent` function.

#### Attributes:

- `name`
  - The value is the name of the domain for which the DNS record is being updated.
- `parent`
  - The value is the parent domain of the domain for which the DNS record is being updated.
- `dns-record-type`
  - The value indicates the type of DNS record being updated.
- `value`
  - The value is the new or updated content of the DNS record.

This event captures key details of DNS record updates, including the domain and parent domain names, the specific type of DNS record being altered, and the updated record content.

### `types.EventTypeWithdrawRegistrationFee`

This event is emitted when registration fees are withdrawn in a domain management system. It is triggered by the `EmitWithdrawRegistrationFeeEvent` function.

#### Attributes:

- `name`
  - The value is the name of the domain from which the registration fees are being withdrawn.
- `domain-fee`
  - The value is the amount of registration fees withdrawn.

This event captures key details of the withdrawal process, including the domain name and the amount of fees withdrawn, providing transparency and record-keeping for financial transactions within the system.

### `types.EventTypeExtendTopLevelDomainExpirationDate`

This event is emitted when the expiration date of a top-level domain is extended in a domain management system. It is triggered by the `EmitExtendTopLevelDomainExpirationDateEvent` function.

#### Attributes:

- `name`
  - The value is the name of the top-level domain whose expiration date is being extended.
- `expiration-date`
  - The value is the new expiration date of the top-level domain.
- `total-registration-fee`
  - The value is the total fee paid for extending the domain's expiration date.
- `burn-weight`
  - The value represents the weight of the fee that will be burned.
- `registration-fee-to-burn`
  - The value is the portion of the registration fee that will be burned.
- `registration-fee-to-treasury`
  - The value is the portion of the registration fee that will be directed to the treasury.

This event captures key details of the process to extend the expiration date of a top-level domain, including the new expiration date, the associated fees, and the financial distribution of these fees.

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
