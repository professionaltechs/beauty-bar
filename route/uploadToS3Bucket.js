const express = require('express')
const uploadToS3BucketController = require("../controller/uploadToS3Bucket")
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/S3Bucket/uploadToS3Bucket:
 *  post:
 *    tags:
 *      - admin
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: upload to S3 Bucket and get image link.
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:  
 *          schema:
 *            type: object
 *            properties:
 *              fileName:
 *                type: string,
 *                format: binary
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/uploadToS3Bucket", auth, uploadToS3BucketController.uploadToS3Bucket);


module.exports = router;