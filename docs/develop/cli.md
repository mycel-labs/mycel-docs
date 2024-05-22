---
sidebar_position: 2
draft: true
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

### registry register-top-level-domain

Registers a new top-level domain:

```
myceld tx registry register-top-level-domain [name] [registration-period-in-year]
```

### registry register-second-level-domain

Registers a new second-level domain under a specified parent domain:

```
myceld tx registry register-second-level-domain [name] [parent] [registration-period-in-year]
```

### registry update-wallet-record

Updates the wallet address record for a domain:

```
myceld tx registry update-wallet-record [name] [parent] [wallet-record-type] [value]
```

### registry update-dns-record

Updates the DNS record for a domain:

```
myceld tx registry update-dns-record [name] [parent] [dns-record-type] [value]
```

### registry withdraw-registration-fee

Withdraws the registration fee for an owned domain:

```
myceld tx registry withdraw-registration-fee [name]
```

### registry extend-top-level-domain-expiration-date

Extends the expiration date of a top-level domain:

```
myceld tx registry extend-top-level-domain-expiration-date [name] [extension-period-in-year]
```

## Queries

### registry list-top-level-domain

Displays a list of all registered top-level domains:

```
myceld query registry list-top-level-domain
```

### registry list-second-level-domain

Displays a list of all registered second-level domains:

```
myceld q registry list-second-level-domain
```

### registry show-top-level-domain

Queries domain records by a specified top-level domain name:

```
myceld q registry show-top-level-domain [tld name]
```

### registry show-second-level-domain

Queries domain records by a specified second-level domain name and its parent:

```
myceld q registry show-second-level-domain [sld name] [parent domain]
```

exmaple:  
Query `foo.cel`

```
myceld q registry show-second-level-domain foo cel
```

### registry list-domain-ownership

Displays a list of all domain ownerships:

```
myceld q registry list-domain-ownership
```

### registry show-domain-ownership

Queries domain ownership by the owner's address:

```
myceld q registry show-domain-ownership [owner]
```

### registry domain-registration-fee

Queries the registration fee for a domain:

```
myceld q registry domain-registration-fee [name] [parent] [registration-period-in-year]
```

### resolver all-records

Query allRecords

```
myceld query resolver all-records [domainName] [domainParent] [flags]
```

### resolver dns-record

Query DNS record

```
myceld query resolver dns-record [domainName] [domainParent] [dns-record-type] [flags]
```

### resolver wallet-record

Query wallet record

```
myceld query resolver wallet-record [domain-name] [domain-parent] [wallet-record-type] [flags]
```
