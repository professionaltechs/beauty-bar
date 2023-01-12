const express = require('express')
const auth = require("../functions/authentication");
const groupController = require("../controller/group")

const router = express.Router();

/**
 * @swagger
 * /api/group/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: group
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
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
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: group
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
router.post("/get", auth, groupController.get);

/**
 * @swagger
 * /api/group/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: get all group
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
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: group
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
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
 *    security:
 *      - bearerAuth: []
 *    description: Create new group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: group
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
router.post("/delete", auth, groupController.delete);

module.exports = router;