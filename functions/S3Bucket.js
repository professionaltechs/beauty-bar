const AWS = require("aws-sdk");
const path = require("path");
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_S3_REGION,
});

const spacesEndpoint = new AWS.Endpoint(process.env.AWS_S3_ENDPOINT);
const s3 = new AWS.S3({ endpoint: spacesEndpoint });

const uniqueFileName = (length = 13) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.uploadToS3 = async (key, file) => {
    if (!file.uniquename) {
      file.uniquename = `${uniqueFileName()}${path.extname(file.originalname)}`;
    }
    if (!path.extname(file.uniquename) || path.extname(file.uniquename) === ".") {
      file.uniquename = `${file.uniquename}${`.${file.mimetype.split("/")[1]}`}`;
      file.originalname = `${file.originalname}${`.${
        file.mimetype.split("/")[1]
      }`}`;
    }
    const params = {
      Bucket: process.env.AWS_S3_BUCKET, 
      Key: `${key}/${file.uniquename}`,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
      ContentDisposition: `inline; filename="${file.originalname}"`,
    };
    return new Promise((res, rej) =>
      s3.upload(params, (error, data) => {
        if (error) {
          console.log("upload -> error", error);
          rej(error);
          throw error;
        } else {
          console.log(data.Location, "files");
          res(data.Location);
        }
      })
    );
  }

  exports.deleteFromS3 = async (key, file) => {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `${key}/${file}`
    };
    return new Promise((res, rej) => {
      s3.deleteObject(params, (error, data) => {
        if (error){
          console.log(error, "error")
          rej(error)
        }else{
          console.log(data, "data")
          res("successfully deleted")
        }
      })
    })
  }