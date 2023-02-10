const express = require('express')
const productController = require("../controller/product")
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/product/getProductDetailsById:
 *  post:
 *    tags:
 *      - user
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
router.post("/getProductDetailsById", auth, productController.getProductDetailsById);

/**
 * @swagger
 * /api/product/getProductsBySubCatId:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get product by subCategory id, remove limit field to get all matched products.
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
router.post("/getProductsBySubCatId", auth, productController.getProductsBySubCatId);

/**
 * @swagger
 * /api/product/getProductsByBrandId:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get product by Brand id, remove limit field to get all matched products.
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
router.post("/getProductsByBrandId", auth, productController.getProductsByBrandId);

/**
 * @swagger
 * /api/product/getAllProducts:
 *  post:
 *    tags:
 *      - user
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
router.post("/getAllProducts", auth, productController.getAllProducts);

/**
 * @swagger
 * /api/product/getPopularProducts:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get popular products by passing the limit(number of products to fetch) this will be also be used for top 10 || 3 products and also for top rated products
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
 * /api/product/getFilteredProductsByPrice:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: pass in "highest" for products filtered by highest price and "lowest" for lowest price, remove limit field to get all matched products.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - flag
 *            properties:
 *              flag:
 *                type: string
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
router.post("/getFilteredProductsByPrice", auth, productController.getFilteredProductsByPrice);

/**
 * @swagger
 * /api/product/getFilteredProductsByStoreId:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: pass in "storeId" to get products of specific store, remove limit field to get all matched products.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - storeId
 *            properties:
 *              storeId:
 *                type: string
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
router.post("/getFilteredProductsByStoreId", auth, productController.getFilteredProductsByStoreId);

/**
 * @swagger
 * /api/product/getTop3NewestProducts:
 *  post:
 *    tags:
 *      - user
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
 * /api/product/getDiscountedProducts:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get discounted products by passing limit or remove the limit field to get all discounted products.
 *    requestBody:
 *      required: false
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
router.post("/getDiscountedProducts", auth, productController.getDiscountedProducts);

/**
 * @swagger
 * /api/product/getBestMatchProducts:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get user's best match products by passing in limit and user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: string
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
router.post("/getBestMatchProducts", auth, productController.getBestMatchProducts);

module.exports = router;