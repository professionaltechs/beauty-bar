const express = require('express')
const auth = require("../functions/authentication");
const productController = require("../controller/product")

const router = express.Router();

/**
 * @swagger
 * /api/product/createProduct:
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
 *              - subCategoryId
 *              - brandId
 *            properties:
 *              images:
 *                type: array
 *                items:
 *                  type: string
 *              skinConcernId:
 *                type: array
 *                items:
 *                  type: string
 *              shades:
 *                type: array
 *                items:
 *                  type: string
 *              title:
 *                type: string
 *              price:
 *                type: integer
 *              rating:
 *                type: integer
 *              brandId:
 *                type: string
 *              subCategoryId:
 *                type: string
 *              skinTypeId:
 *                type: string
 *              skinToneId:
 *                type: string
 *              skinUnderToneId:
 *                type: string
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
router.post("/createProduct", auth, productController.create);

/**
 * @swagger
 * /api/product/getProduct:
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
router.post("/getProduct", auth, productController.get);

/**
 * @swagger
 * /api/product/getProductsBySubCatId:
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
 *              - subCategoryId
 *            properties:
 *              subCategoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getProductsBySubCatId", auth, productController.getProductsBySubCatId);

/**
 * @swagger
 * /api/product/getProductsByBrandId:
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
 *              - brandId
 *            properties:
 *              brandId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getProductsByBrandId", auth, productController.getProductsByBrandId);

/**
 * @swagger
 * /api/product/getAllProduct:
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
router.post("/getAllProduct", auth, productController.getAll);

/**
 * @swagger
 * /api/product/getPopularProducts:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get popular products by passing the limit(number of products to fetch) this will be also used be used for top 10/3 products
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              limit:
 *                type: integer
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getPopularProducts", auth, productController.getPopularProducts);

/**
 * @swagger
 * /api/product/getTop3NewestProducts:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get top 3 newest products
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getTop3NewestProducts", auth, productController.getTop3NewestProducts);

/**
 * @swagger
 * /api/product/updateProduct:
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
router.post("/updateProduct", auth, productController.update);

/**
 * @swagger
 * /api/product/deleteProduct:
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
router.post("/deleteProduct", auth, productController.delete);

module.exports = router;