const express = require('express')
const auth = require("../functions/authentication");
const categoryController = require("../controller/categories")

const router = express.Router();

/**
 * @swagger
 * /api/categories/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new category
 *    parameters:
 *      - in: body
 *        name: category
 *        description: category
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
router.post("/create", auth, categoryController.create);

/**
 * @swagger
 * /api/categories/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new category
 *    parameters:
 *      - in: body
 *        name: category
 *        description: category
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
router.post("/get", auth, categoryController.get);

/**
 * @swagger
 * /api/categories/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: get all category
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, categoryController.getAll);

/**
 * @swagger
 * /api/categories/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new category
 *    parameters:
 *      - in: body
 *        name: category
 *        description: category
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
router.post("/update", auth,categoryController.update);

/**
 * @swagger
 * /api/categories/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new category
 *    parameters:
 *      - in: body
 *        name: category
 *        description: category
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
router.post("/delete", auth, categoryController.delete);

module.exports = router;