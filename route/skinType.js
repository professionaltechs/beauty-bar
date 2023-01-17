const skinTypeController = require('../controller/skinType')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinType/create:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinType
 *    requestBody:
 *      description: skinType to create
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/create", auth, skinTypeController.create);

/**
 * @swagger
 * /api/skinType/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get skinType by Id 
 *    requestBody:
 *      description: skintype
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
router.post("/get", auth, skinTypeController.get);

/**
 * @swagger
 * /api/skinType/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all SkinTypes 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinTypeController.getAll);

/**
 * @swagger
 * /api/skinType/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Update SkinType
 *    requestBody:
 *      description: update skintype
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
 *              title:
 *                type: string
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/update", auth, skinTypeController.update);

/**
 * @swagger
 * /api/skinType/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinType by Id 
 *    requestBody:
 *      description: delete skinType by Id 
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
router.post("/delete", auth, skinTypeController.delete);

module.exports = router;