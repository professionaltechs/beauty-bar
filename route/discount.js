const express = require('express');
const discountController = require("../controller/discount");
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/discount/getDiscountById:
 *  post:
 *    tags:
 *      - user
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

module.exports = router;