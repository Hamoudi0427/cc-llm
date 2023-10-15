#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CcLlmStack } from '../lib/cc-llm-stack';

const app = new cdk.App();
new CcLlmStack(app, 'CcLlmStack', {
  env: {
    account: "718812264241",
    region: "us-east-2",
  }
});
app.synth();