bucketUpload(userDto: UserDto) {

    Aws.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: "ap-southeast-1"
    })

    const s3 = new Aws.S3({ params: { Bucket: 'my-simple-app' } })



    function getImgBuffer(base64: any) {
        const base64str = base64.replace(/^data:image\/\w+;base64,/, "")
        return Buffer.from(base64str, 'base64')
    }

    const buffer = getImgBuffer(userDto.profilePic)

    const imageUpload = (path: any, buffer: any) => {

        const data = {
            Key: 'asdaasdaasd',
            Bucket: 'my-simple-app',
            Body: buffer,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg',
            ACL: 'public-read'
        }

        return new Promise((reslove, reject) => {
            s3.putObject(data, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(data)
                }
            })
        })
    }
}