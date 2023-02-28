const S3Bucket = require("../functions/S3Bucket");

exports.uploadToS3Bucket = async (req, res) => {
  console.log(req.files);
  const file = req.files[0];
  S3Bucket.uploadToS3("content", file).then((response) => {
    res.json({
      status: "success",
      message: response,
    });
  });
};

exports.deleteFromS3Bucket = async (req, res) => {
  console.log(req.body.fileName);
  S3Bucket.deleteFromS3("content", req.body.fileName).then((response) => {
    res.json({
      status: "success",
      message: response,
    });
  });
};
