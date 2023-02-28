const express = require('express')
const S3BucketController = require("../controller/S3Bucket")
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/S3Bucket/uploadToS3Bucket:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: upload to S3 Bucket and get image link.
 *    requestBody:
 *      content:
 *        multipart/form-data:  
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: array
 *                items:
 *                  type: string
 *                  format: binary
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/uploadToS3Bucket", auth, S3BucketController.uploadToS3Bucket);

/**
 * @swagger
 * /api/S3Bucket/deleteFromS3Bucket:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: upload to S3 Bucket and get image link.
 *    requestBody:
 *      content:
 *        multipart/form-data:  
 *          schema:
 *            type: object
 *            properties:
 *              fileName:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/deleteFromS3Bucket", auth, S3BucketController.deleteFromS3Bucket);

module.exports = router;