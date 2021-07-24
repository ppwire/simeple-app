import { Injectable } from '@nestjs/common';
import * as Aws from 'aws-sdk'
@Injectable()
export class UtilService {


   compare(password: string, userPassword: string): Boolean {
      if (password === userPassword) return true
      else return false
   }

   async uploadImage(imgBase64: string): Promise<any> {
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
      const curTime = new Date().getTime().toString()
      const buffer = getImgBuffer(imgBase64)
      const imageUpload = (path: any, buffer: any) => {
         const data = {
            Key: path,
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
                  reslove(`${process.env.S3_URL}/${path}`)
               }
            })
         })
      }
      return await imageUpload(curTime, buffer)
   }

}
