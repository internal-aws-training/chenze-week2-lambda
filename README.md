# Basic
## tasks
- Create lambda function with AWS Web Console and test
Done.
- Create lambda function via aws cli with ZIP file and invoke
```
aws lambda create-function --function-name cz-cli-lambda --runtime nodejs12.x --role arn:aws:iam::494526681395:role/for-aws-training --handler czLambdaB.handler --zip-file fileb://src/Advanced/czLambdaB.js.zip
```
- Create lambda by aws cloudformation
- Access s3 bucket and read file from s3 bucket
- Copy file from a s3 bucket to another s3 bucket
## plan(Done)
create two s3 bucket ,srcBucket and dstBucket. Uploading file to srcBucket trigger the lambda to copy the file from srcBucker to dstBucket
# Advanced
- AWS lambda invoke another one
- AWS lambda can consumer event from SNS
- Cloudwatch trigger lambda to read file regularly
## plan 
- SNS to trigger lambdaA to invokeB to write a file into s3 .
- A cloudWatch trigger lambdaC to read file from the s3
# Proficient
- Create an api backend using lambda and AWS API gateway (it may need route53)
