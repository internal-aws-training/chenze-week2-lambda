// dependencies
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    const srcBucket = event.Records[0].s3.bucket.name;
    const srcKey    = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
    const dstBucket = "czli-lambda-source";
    const dstKey    = "copy-" + srcKey;
    try {
        const params = {
            Bucket: srcBucket,
            Key: srcKey
        };
        var origimage = await s3.getObject(params).promise();

    } catch (error) {
        console.log(error);
        return;
    }  

    try {
        const destparams = {
            Bucket: dstBucket,
            Key: dstKey,
            Body: origimage.Body,
            ContentType: "image"
        };
        await s3.putObject(destparams).promise(); 
    } catch (error) {
        console.log(error);
        return;
    } 

    console.log('Successfully download ' + srcBucket + '/' + srcKey +
        ' and uploaded to ' + dstBucket + '/' + dstKey); 
};
