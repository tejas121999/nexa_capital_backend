const multer = require("multer")
const { S3Client } = require("@aws-sdk/client-s3");
const dotenv = require('dotenv')
dotenv.config()

const bucket_name = process.env.BUCKET_NAME
const bucket_region = process.env.BUCKET_REGION
const access_key = process.env.ACCESS_KEY
const secret_access_key = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
        accessKeyId:access_key,
        secretAccessKey:secret_access_key
    },
    region:bucket_region
})
const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

exports.upload = upload
exports.s3 = s3