const bannerController = require('../controller/banner')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/banner/createBanner:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new banner
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - image
 *            properties:
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/createBanner", auth, bannerController.createBanner);

/**
 * @swagger
 * /api/banner/getBannerById:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all banner images
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllBanners", auth, bannerController.getAllBanners);

/**
 * @swagger
 * /api/banner/updateBannerById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update banner by id
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
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/updateBannerById", auth, bannerController.updateBannerById);

/**
 * @swagger
 * /api/banner/deleteBannerById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete banner by id
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
router.post("/deleteBannerById", auth, bannerController.deleteBannerById);

module.exports = router;