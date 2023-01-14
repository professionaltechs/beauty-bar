const express = require('express')
const auth = require("../functions/authentication");
const groupController = require("../controller/group")

const router = express.Router();

/**
 * @swagger
 * /api/group/create:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - description
 *            properties:
 *              title:
 *                type: string
 *              image: 
 *                type: string
 *              description: 
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth, groupController.create);

/**
 * @swagger
 * /api/group/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get group by id
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
router.post("/get", auth, groupController.get);

/**
 * @swagger
 * /api/group/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all groups
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, groupController.getAll);

/**
 * @swagger
 * /api/group/update:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update group by id
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
 *              title:
 *                type: string
 *              image: 
 *                type: string
 *              description: 
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth,groupController.update);

/**
 * @swagger
 * /api/group/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete group by id
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
router.post("/delete", auth, groupController.delete);

module.exports = router;