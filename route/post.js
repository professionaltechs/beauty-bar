const express = require('express')
const auth = require("../functions/authentication");
const postController = require("../controller/post")

const router = express.Router();

/**
 * @swagger
 * /api/post/create:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new post
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - userId
 *              - image
 *              - text
 *            properties:
 *              userId:
 *                type: string
 *              image:
 *                type: string
 *              text:
 *                type: string
 *              taggedProducts:
 *                type: array
 *                items:
 *                  type: string
 *              taggedProductsLink:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    link:
 *                      type: string
 *                    title:
 *                      type: string
 *                    description:
 *                      type: string
 *              like:
 *                type: integer
 *              hashtag:
 *                type: string
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get post by id
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
router.post("/get", auth, postController.get);

/**
 * @swagger
 * /api/post/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all posts
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
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update post by id
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
 *              image:
 *                type: string
 *              text:
 *                type: string
 *              taggedProducts:
 *                type: array
 *                items:
 *                  type: string
 *              like:
 *                type: integer
 *              hashtag:
 *                type: string
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
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete post by id
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
router.post("/delete", auth, postController.delete);

module.exports = router;