---
sidebar_position: 4
---

# Resolver

## Abstract

Resolver module provides the following feature:

- Resolve domain name with IBC
- Handle name resolution request events on other chains

## Stores

[proto/mycel/registry](https://github.com/mycel-domain/mycel/tree/main/proto/mycel/resolver)

## Events

## Queries

### all-records

Query allRecords

```
myceld query resolver all-records [domainName] [domainParent] [flags]
```

#### Response

```
{
  "values": {
    "additionalProp1": {
      "dnsRecord": {
        "dnsRecordType": "NO_RECORD_TYPE",
        "value": "string"
      },
      "walletRecord": {
        "walletRecordType": "NO_NETWORK",
        "value": "string"
      },
      "metadata": {
        "key": "string",
        "value": "string"
      }
    },
    "additionalProp2": {
      "dnsRecord": {
        "dnsRecordType": "NO_RECORD_TYPE",
        "value": "string"
      },
      "walletRecord": {
        "walletRecordType": "NO_NETWORK",
        "value": "string"
      },
      "metadata": {
        "key": "string",
        "value": "string"
      }
    },
    "additionalProp3": {
      "dnsRecord": {
        "dnsRecordType": "NO_RECORD_TYPE",
        "value": "string"
      },
      "walletRecord": {
        "walletRecordType": "NO_NETWORK",
        "value": "string"
      },
      "metadata": {
        "key": "string",
        "value": "string"
      }
    }
  }
}
```

### dns-record

Query DNS record

```
myceld query resolver dns-record [domainName] [domainParent] [dns-record-type] [flags]
```

#### Response

```
{
  "value": {
    "dnsRecordType": "NO_RECORD_TYPE",
    "value": "string"
  }
}
```

### wallet-record

Query wallet record

```
myceld query resolver wallet-record [domain-name] [domain-parent] [wallet-record-type]
```

#### Response

```
{
  "value": {
    "walletRecordType": "NO_NETWORK",
    "value": "string"
  }
}
```
