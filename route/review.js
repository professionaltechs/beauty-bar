const express = require('express')
const auth = require("../functions/authentication");
const reviewController = require("../controller/review")

const router = express.Router();

/**
 * @swagger
 * /api/review/create:
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
router.post("/create", auth,reviewController.create);

/**
 * @swagger
 * /api/review/get:
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
router.post("/get", auth,reviewController.get);

/**
 * @swagger
 * /api/review/getAll:
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
router.post("/getAll", auth, reviewController.getAll);

/**
 * @swagger
 * /api/review/update:
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
router.post("/update", auth, reviewController.update);

/**
 * @swagger
 * /api/review/delete:
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
router.post("/delete", auth, reviewController.delete);

module.exports = router;