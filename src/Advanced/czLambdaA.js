const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
  region: 'ap-southeast-1' //change to your region
});

exports.handler = async () => {
  var params = {
    FunctionName: "cz-lambdaB", 
   };
   console.log("before invoke B");
   const result = await lambda.invoke(params).promise();
   console.log("invoke result:", result);
   console.log("after invoke B");
}
