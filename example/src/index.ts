import {SampleStack} from './sampleStack'
import {App} from 'aws-cdk-lib'

const app = new App()
new SampleStack(app, 'SampleStack')
