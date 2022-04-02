# cf-to-dynamodb-schema

Defined Cloudformation DynamoDB Template convert to json to be adapted for `aws dynamodb create-table --cli-input-json`

### Which template you can use?

- `aws-cdk`'s `cdk.out/<table-name>.template.json`
- `.yaml` or `.yml` of Cloudformation Template

## Install

```
npm i -D cf-to-dynamodb-schema
yarn add -D cf-to-dynamodb-schema
# or npx
npx cf-to-dynamodb-schema --help
```

## How to use

- `<path>` is `./cdk.out/<table-name>.template.json` or yaml file.
- For more details, See [/example](https://github.com/ErgoFriend/cf-to-dynamodb-schema/tree/main/example) directory !

### Run create-table from `<path>`

```
cf-to-dynamodb-schema create-table <path> -e <dynamodb-endpoint> -p <aws-profile-name>
```

### Get adapted .json file to create-table json for aws dynamodb command

```
# Output command line
cf-to-dynamodb-schema parse-template <path>
# Export json
cf-to-dynamodb-schema parse-template <path> -o generated.json
```

## Related

- python cli [cloudformation-dynamodb-export · PyPI](https://pypi.org/project/cloudformation-dynamodb-export/)
- ruby script [CloudFormation の定義から DynamoDB local の Table を作成する](https://zenn.dev/k1ch/articles/eae8e9ae96040b)
