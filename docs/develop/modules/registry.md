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

### list-top-level-domain

Displays a list of all registered top-level domains:

```
myceld query registry list-top-level-domain
```

#### Response

```
{
  "topLevelDomain": [
    {
      "name": "string",
      "expirationDate": "2023-11-15T20:02:43.827Z",
      "metadata": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "subdomainConfig": {
        "maxSubdomainRegistrations": "string",
        "subdomainRegistrationFees": {
          "feeByLength": {
            "additionalProp1": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            },
            "additionalProp2": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            },
            "additionalProp3": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            }
          },
          "feeByName": {
            "additionalProp1": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            },
            "additionalProp2": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            },
            "additionalProp3": {
              "isRegistrable": true,
              "fee": {
                "denom": "string",
                "amount": "string"
              }
            }
          },
          "defaultFee": {
            "denom": "string",
            "amount": "string"
          }
        }
      },
      "subdomainCount": "string",
      "accessControl": {
        "additionalProp1": "NO_ROLE",
        "additionalProp2": "NO_ROLE",
        "additionalProp3": "NO_ROLE"
      },
      "totalWithdrawalAmount": [
        {
          "denom": "string",
          "amount": "string"
        }
      ]
    }
  ],
  "pagination": {
    "next_key": "string",
    "total": "string"
  }
}
```

### list-second-level-domain

Displays a list of all registered second-level domains:

```
myceld q regisry list-second-level-domain
```

#### Response

```
{
  "secondLevelDomain": [
    {
      "name": "string",
      "parent": "string",
      "expirationDate": "2023-11-15T20:05:36.447Z"
    }
  ],
  "pagination": {
    "next_key": "string",
    "total": "string"
  }
}
```

### show-top-level-domain

Queries domain records by a specified top-level domain name:

```
myceld q registry show-top-level-domain [tld name]
```

#### Response

```
{
  "topLevelDomain": {
    "name": "string",
    "expirationDate": "2023-11-15T20:04:03.329Z",
    "metadata": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "subdomainConfig": {
      "maxSubdomainRegistrations": "string",
      "subdomainRegistrationFees": {
        "feeByLength": {
          "additionalProp1": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          },
          "additionalProp2": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          },
          "additionalProp3": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          }
        },
        "feeByName": {
          "additionalProp1": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          },
          "additionalProp2": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          },
          "additionalProp3": {
            "isRegistrable": true,
            "fee": {
              "denom": "string",
              "amount": "string"
            }
          }
        },
        "defaultFee": {
          "denom": "string",
          "amount": "string"
        }
      }
    },
    "subdomainCount": "string",
    "accessControl": {
      "additionalProp1": "NO_ROLE",
      "additionalProp2": "NO_ROLE",
      "additionalProp3": "NO_ROLE"
    },
    "totalWithdrawalAmount": [
      {
        "denom": "string",
        "amount": "string"
      }
    ]
  }
}
```

### show-second-level-domain

Queries domain records by a specified second-level domain name and its parent:

```
myceld q regisry show-second-level-domain [sld name] [parent domain]
```

exmaple:  
Query `foo.cel`

```
myceld q regisry show-second-level-domain foo cel
```

#### Response

```
{
  "secondLevelDomain": {
    "name": "string",
    "parent": "string",
    "expirationDate": "2023-11-15T20:05:47.930Z"
  }
}
```

### list-domain-ownership

Displays a list of all domain ownerships:

```
myceld q registry list-domain-ownership
```

#### Response

```
{
  "domainOwnership": [
    {
      "owner": "string",
      "domains": [
        {
          "name": "string",
          "parent": "string"
        }
      ]
    }
  ],
  "pagination": {
    "next_key": "string",
    "total": "string"
  }
}
```

### show-domain-ownership

Queries domain ownership by the owner's address:

```
myceld q registry show-domain-ownership [owner]
```

#### Response

```
{
  "domainOwnership": {
    "owner": "string",
    "domains": [
      {
        "name": "string",
        "parent": "string"
      }
    ]
  }
}
```

### domain-registration-fee

Queries the registration fee for a domain:

```
myceld q registry domain-registration-fee [name] [parent] [registration-period-in-year]
```

#### Response

```
{
  "isRegistrable": true,
  "fee": [
    {
      "denom": "string",
      "amount": "string"
    }
  ],
  "registrationPeriodInYear": "string",
  "maxSubDomainRegistrations": "string",
  "errorMessage": "string"
}
```
