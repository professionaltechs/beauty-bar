const express = require('express');
const discountController = require("../controller/discount");
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/discount/createDiscount:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new discount
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - percentage
 *              - validity
 *            properties:
 *              percentage:
 *                type: integer
 *              validity:
 *                type: date
 *                pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *                example: "2019-05-17"
 *              productIds:
 *                type: array
 *                items:
 *                  type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/createDiscount", adminAuth, discountController.createDiscount);

/**
 * @swagger
 * /api/discount/getDiscountById:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get discount by id
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
router.post("/getDiscountById", auth, discountController.getDiscountById);

/**
 * @swagger
 * /api/discount/getAllDiscounts:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all discounts
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAllDiscounts", auth, discountController.getAllDiscounts);

/**
 * @swagger
 * /api/discount/updateDiscountById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update discount by id
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
 *              percentage:
 *                type: integer
 *              validity:
 *                type: date
 *                pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *                example: "2019-05-17"
 *              productIds:
 *                type: array
 *                items:
 *                  type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/updateDiscountById", adminAuth, discountController.updateDiscountById);

/**
 * @swagger
 * /api/discount/insertProductsInDiscountById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update discount by id
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
 *              productIds:
 *                type: array
 *                items:
 *                  type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/insertProductsInDiscountById", adminAuth, discountController.insertProductsInDiscountById);

/**
 * @swagger
 * /api/discount/removeProductsInDiscountById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update discount by id
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
 *              productIds:
 *                type: array
 *                items:
 *                  type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/removeProductsInDiscountById", adminAuth, discountController.removeProductsInDiscountById);

/**
 * @swagger
 * /api/discount/deleteDiscountById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete discount by id
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
router.post("/deleteDiscountById", adminAuth, discountController.deleteDiscountById);

module.exports = router;