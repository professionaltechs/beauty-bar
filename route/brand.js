const express = require('express')
const auth = require("../functions/authentication");
const brandController = require("../controller/brand")

const router = express.Router();

/**
 * @swagger
 * /api/brand/create:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new brand
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - image
 *            properties:
 *              name:
 *                type: string
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth,brandController.create);

/**
 * @swagger
 * /api/brand/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get brand by id
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
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/get", auth,brandController.get);

/**
 * @swagger
 * /api/brand/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all brands
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, brandController.getAll);

/**
 * @swagger
 * /api/brand/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update brand by id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - id
 *            properties:
 *              id:
 *                type: string
 *              name:
 *                type: string
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, brandController.update);

/**
 * @swagger
 * /api/brand/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete brand by id
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
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/delete", auth, brandController.delete);

module.exports = router;