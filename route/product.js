const express = require('express')
const auth = require("../functions/authentication");
const productController = require("../controller/product")

const router = express.Router();

/**
 * @swagger
 * /api/product/create:
 *  post:
 *    tags:  
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new product
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - images
 *              - title
 *              - price
 *              - ingredients
 *              - categoryId
 *            properties:
 *              images:
 *                type: array
 *                items:
 *                  type: string
 *              title:
 *                type: string
 *              price:
 *                type: integer
 *              rating:
 *                type: integer
 *              description:
 *                type: object
 *                properties:
 *                  images:
 *                    type: array
 *                    items:
 *                      type: string
 *                  text:
 *                    type: string
 *                  videoURL:
 *                    type: string
 *              ingredients:
 *                type: string
 *              discount:
 *                type: integer
 *              categoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth, productController.create);

/**
 * @swagger
 * /api/product/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get product by id
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
router.post("/get", auth, productController.get);

/**
 * @swagger
 * /api/product/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all products
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, productController.getAll);

/**
 * @swagger
 * /api/product/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update product
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
 *              images:
 *                type: array
 *                items:
 *                  type: string
 *              title:
 *                type: string
 *              price:
 *                type: integer
 *              rating:
 *                type: integer
 *              description:
 *                type: object
 *                properties:
 *                  images:
 *                    type: array
 *                    items:
 *                      type: string
 *                  text:
 *                    type: string
 *                  videoURL:
 *                    type: string
 *              ingredients:
 *                type: string
 *              discount:
 *                type: integer
 *              categoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, productController.update);

/**
 * @swagger
 * /api/product/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete new product
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
router.post("/delete", auth, productController.delete);

module.exports = router;