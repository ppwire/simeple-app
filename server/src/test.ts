import * as Aws from 'aws-sdk';

const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const params = {
  Bucket: 'my-simple-app',
  CreateBucketConfiguration: {
    // Set your region here
    LocationConstraint: 'ap-southeast-1',
  },
};

s3.createBucket(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log('Bucket Created Successfully', data.Location);
});
