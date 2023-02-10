const express = require('express')
const reviewController = require("../controller/review")
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/review/getReviewById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get review by id
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
router.post("/getReviewById", auth,reviewController.getReviewById);

/**
 * @swagger
 * /api/review/getAllReviews:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all reviews
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAllReviews", auth, reviewController.getAllReviews);

module.exports = router;