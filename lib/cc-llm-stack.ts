import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CcLlmStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: "test pipeline",
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub("Hamoudi0427/cc-llm", "main"),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    })

  }
}
