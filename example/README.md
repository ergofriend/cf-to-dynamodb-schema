# example of cf-to-dynamodb-schema

Create aws profile

```
aws configure --profile c2dexample
```

Setup DynamoDB Local

```
docker compose up -d
```

Create Table

```
make init
```

Check Table is exist

```
make check
```
