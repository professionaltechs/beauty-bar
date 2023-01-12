const express = require('express')
const auth = require("../functions/authentication");
const postController = require("../controller/post")

const router = express.Router();

/**
 * @swagger
 * /api/post/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new post
 *    parameters:
 *      - in: body
 *        name: post
 *        description: post
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - image
 *            - text
 *          properties:
 *            userId:
 *              type: string
 *            image:
 *              type: string
 *            text:
 *              type: string
 *            taggedProducts:
 *              type: string
 *            like:
 *              type: string
 *            hashtag:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth, postController.create);

/**
 * @swagger
 * /api/post/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new post
 *    parameters:
 *      - in: body
 *        name: post
 *        description: post
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
router.post("/get", auth, postController.get);

/**
 * @swagger
 * /api/post/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: get all post
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, postController.getAll);

/**
 * @swagger
 * /api/post/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: post
 *        description: post
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - image
 *            - text
 *          properties:
 *            userId:
 *              type: string
 *            image:
 *              type: string
 *            text:
 *              type: string
 *            taggedProducts:
 *              type: string
 *            like:
 *              type: string
 *            hashtag:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, postController.update);

/**
 * @swagger
 * /api/post/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: post
 *        description: post
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
router.post("/delete", auth, postController.delete);

module.exports = router;