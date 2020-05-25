const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
  region: 'ap-southeast-1' //change to your region
});

exports.handler = async () => {
  var params = {
    FunctionName: "cz-lambdaB", 
   };
   console.log("before invoke B");
   lambda.invoke(params, function(err, data) {
     if (err) console.log(err, err.stack); 
     else     console.log(data);
   });
   console.log("after invoke B");
}
