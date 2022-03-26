import {Stack, StackProps} from 'aws-cdk-lib'
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb'
import {Construct} from 'constructs'

export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new Table(this, `SampleStack`, {
      tableName: 'sample-table',
      partitionKey: {name: 'pk', type: AttributeType.STRING},
      sortKey: {name: 'sk', type: AttributeType.STRING},
    }).addLocalSecondaryIndex({
      indexName: 'dummyIndex',
      sortKey: {
        name: 'dummy',
        type: AttributeType.STRING,
      },
    })
  }
}
