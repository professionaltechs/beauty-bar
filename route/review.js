const express = require('express')
const reviewController = require("../controller/review")
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/review/createReview:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new review
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - userId
 *              - productId
 *              - rating
 *            properties:
 *              userId:
 *                type: string
 *              productId:
 *                type: string
 *              rating:
 *                type: integer
 *              comment:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/createReview", adminAuth,reviewController.createReview);

/**
 * @swagger
 * /api/review/getReviewById:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
 *      - admin
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

/**
 * @swagger
 * /api/review/updateReviewById:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: update review by id
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
 *              userId:
 *                type: string
 *              productId:
 *                type: string
 *              rating:
 *                type: integer
 *              comment:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/updateReviewById", adminAuth, reviewController.updateReviewById);

/**
 * @swagger
 * /api/review/deleteReviewById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete review by id
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
router.post("/deleteReviewById", adminAuth, reviewController.deleteReviewById);

module.exports = router;