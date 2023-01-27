const uploadToS3 = require("../functions/uploadToS3")

exports.uploadToS3Bucket = async (req, res) => {
    console.log(req)
    const file = req.files[0]
    uploadToS3("content", file).then(response => {
        res.json({
        status: "success",
        message: response
        })
    })
  }