const bannerController = require('../controller/banner')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/banner/create:
 *  post:
 *    tags:
 *      - admin
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get banner by Id 
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all banners 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, bannerController.getAll);

/**
 * @swagger
 * /api/banner/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update banner by id
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
 *            image:
 *              type: string
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