const bannerController = require('../controller/banner')
const express = require('express')
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/banner/getBannerById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get banner by Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getBannerById", auth, bannerController.getBannerById);

/**
 * @swagger
 * /api/banner/getAllBanners:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all banner images
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllBanners", auth, bannerController.getAllBanners);

module.exports = router;