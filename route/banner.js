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
router.post("/createBanner", auth, bannerController.create);

/**
 * @swagger
 * /api/banner/getBanner:
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
router.post("/getBanner", auth, bannerController.get);

/**
 * @swagger
 * /api/banner/getAllBanner:
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
router.post("/getAllBanner", auth, bannerController.getAll);

/**
 * @swagger
 * /api/banner/update:
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
router.post("/update", auth, bannerController.update);

/**
 * @swagger
 * /api/banner/delete:
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
router.post("/delete", auth, bannerController.delete);

module.exports = router;