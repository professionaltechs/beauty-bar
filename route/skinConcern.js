const skinConcernController = require('../controller/skinConcern')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinConcern/create:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *            properties:
 *              title:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/create", auth, skinConcernController.create);

/**
 * @swagger
 * /api/skinConcern/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get skinConcern by Id 
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
router.post("/get", auth, skinConcernController.get);

/**
 * @swagger
 * /api/skinConcern/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all skinConcerns
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinConcernController.getAll);

/**
 * @swagger
 * /api/skinConcern/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update skinConcern by id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id
 *              - title
 *            properties:
 *              id:
 *                type: string
 *              title:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/update", auth, skinConcernController.update);

/**
 * @swagger
 * /api/skinConcern/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinConcern by id
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
router.post("/delete", auth, skinConcernController.delete);

module.exports = router;