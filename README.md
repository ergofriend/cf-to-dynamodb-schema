# cdk-to-dynamodb-schema

This script usage is more adapted for `dynamodb-local` than for `localstack`

## Install

```
npm i -D cdk-to-dynamodb-schema
```

## Description

Helper for exec `aws dynamodb create-table` from cdk.out.template.file !

From like this...

```json
{
  "Resources": {
    "<table-name>": {...},
    "CDKMetadata": {...}
  },
  "Conditions": {
    "CDKMetadataAvailable": {...}
  },
  "Parameters": {
    "BootstrapVersion": {...}
  },
  "Rules": {...}
}
```

To like this !!!

```json
{
    "AttributeDefinitions": [...],
    "KeySchema": [...],
    "LocalSecondaryIndexes": [...],
    "ProvisionedThroughput": {...},
    "TableName": "..."
}
```

## How to use

- `<path>` is `./cdk.out/<table-name>.template.json`
- For more details, See `/example` directory !

### Before use

Please export table template file to `cdk.out`

```
cdk synth
```

### Run create-table from <path>

```
cdk-to-dynamodb-schema create-table <path> -e http://localhost:8000 -p localstack
```

### Get equal schema json to create-table json for aws dynamodb command

```
cdk-to-dynamodb-schema parse-template <path>
```

#### Export a json

```
cdk-to-dynamodb-schema parse-template <path> -o generated.json
```
