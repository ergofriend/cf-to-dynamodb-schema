# cf-to-dynamodb-schema

Defined Cloudformation DynamoDB Template convert to json to be adapted for `aws dynamodb create-table --cli-input-json`

### When you have Cloudformation DynamoDB Template ?

- `aws-cdk`'s `cdk.out/<table-name>.template.json`
- `.yaml` or `.yml` of Cloudformation Template

## Install

```
npm i -D cf-to-dynamodb-schema
yarn add -D cf-to-dynamodb-schema
```

## How to use

- Please export table template file to `cdk.out` by `cdk synth`.
- `<path>` is `./cdk.out/<table-name>.template.json` or yaml file.
- For more details, See [/example](https://github.com/ErgoFriend/cf-to-dynamodb-schema/tree/main/example) directory !

### Run create-table from <path>

```
cf-to-dynamodb-schema create-table <path> -e http://localhost:8000 -p c2dexample
```

### Get equal schema json to create-table json for aws dynamodb command

```
cf-to-dynamodb-schema parse-template <path>
# Export json
cf-to-dynamodb-schema parse-template <path> -o generated.json
```
