const bannerController = require('../controller/banner')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/banner/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new banner
 *    parameters:
 *      - in: body
 *        name: banner
 *        description: banner
 *        schema:
 *          type: object
 *          required:
 *            - image
 *          properties:
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/create", auth, bannerController.create);

/**
 * @swagger
 * /api/banner/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch banner by Id 
 *    parameters:
 *      - in: body
 *        name: banner
 *        description: banner.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/get", auth, bannerController.get);

/**
 * @swagger
 * /api/banner/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch all banners 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, bannerController.getAll);

/**
 * @swagger
 * /api/skinConcern/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - image
 *          properties:
 *            id:
 *              type: string
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/update", auth, bannerController.update);

/**
 * @swagger
 * /api/skinConcern/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/delete", auth, bannerController.delete);

module.exports = router;