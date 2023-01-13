const express = require('express');
const auth = require("../functions/authentication");
const popularProductController = require("../controller/popularProduct");

const router = express.Router();

/**
 * @swagger
 * /api/popularProduct/create:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new popularProduct
 *    parameters:
 *      - in: body
 *        name: popularProduct
 *        description: popularProduct
 *        schema:
 *          type: object
 *          required:
 *            - productId
 *          properties:
 *            productId:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth, popularProductController.create);

/**
 * @swagger
 * /api/popularProduct/get:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get popularProduct by id
 *    parameters:
 *      - in: body
 *        name: popularProduct
 *        description: popularProduct
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/get", auth, popularProductController.get);

/**
 * @swagger
 * /api/popularProduct/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all popularProduct
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, popularProductController.getAll);

/**
 * @swagger
 * /api/popularProduct/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update popularProduct by id
 *    parameters:
 *      - in: body
 *        name: popularProduct
 *        description: popularProduct
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *            productId:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, popularProductController.update);

/**
 * @swagger
 * /api/popularProduct/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete popularProduct by id
 *    parameters:
 *      - in: body
 *        name: popularProduct
 *        description: popularProduct
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/delete", auth, popularProductController.delete);

module.exports = router;