const express = require('express');
const auth = require("../functions/authentication");
const commentController = require("../controller/comment");

const router = express.Router();

/**
 * @swagger
 * /api/comment/create:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new comment
 *    parameters:
 *      - in: body
 *        name: comment
 *        description: comment
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - postId
 *            - text
 *          properties:
 *            userId:
 *              type: string
 *            postId:
 *              type: string
 *            commentId:
 *              type: string
 *            text:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth, commentController.create);

/**
 * @swagger
 * /api/comment/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get comment by id
 *    parameters:
 *      - in: body
 *        name: comment
 *        description: comment
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
router.post("/get", auth, commentController.get);

/**
 * @swagger
 * /api/comment/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
router.post("/getAll", auth, commentController.getAll);

/**
 * @swagger
 * /api/comment/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update comment by id
 *    parameters:
 *      - in: body
 *        name: comment
 *        description: comment
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *            userId:
 *              type: string
 *            postId:
 *              type: string
 *            commentId:
 *              type: string
 *            text:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, commentController.update);

/**
 * @swagger
 * /api/comment/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete comment by id
 *    parameters:
 *      - in: body
 *        name: comment
 *        description: comment
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
router.post("/delete", auth, commentController.delete);

module.exports = router;