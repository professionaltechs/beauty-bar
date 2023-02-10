const express = require('express');
const auth = require("../functions/authentication");
const commentController = require("../controller/comment");

const router = express.Router();

/**
 * @swagger
 * /api/comment/getCommentById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get comment by id
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
router.post("/getCommentById", auth, commentController.getCommentById);

/**
 * @swagger
 * /api/comment/getAllComments:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all comment
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAllComments", auth, commentController.getAllComments);

module.exports = router;