# cdk-to-dynamodb-schema

Helper for exec `aws dynamodb create-table` from cdk.out.template.file

## install

```
npm i -D cdk-to-dynamodb-schema
```

## How to use

### Before use

Please export table template file to `cdk.out`

```
cdk synth
```

### Run create-table from `./cdk.out/<table-name>.template.json`

```
cdk-to-dynamodb-schema create-table ./cdk.out/<table-name>.template.json
```

### Get equal schema json to create-table json for aws dynamodb command

```
cdk-to-dynamodb-schema parse-template ./cdk.out/<table-name>.template.json
```

#### Export a json

```
cdk-to-dynamodb-schema parse-template ./cdk.out/<table-name>.template.json -o a.json
```
