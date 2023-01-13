const express = require('express')
const auth = require("../functions/authentication");
const shadesController = require("../controller/shades")

const router = express.Router();

/**
 * @swagger
 * /api/shades/create:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new shade
 *    parameters:
 *      - in: body
 *        name: shades
 *        description: shades
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - colorShade
 *          properties:
 *            name:
 *              type: string
 *            colorShade:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/create", auth,shadesController.create);

/**
 * @swagger
 * /api/shades/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get shade by id
 *    parameters:
 *      - in: body
 *        name: shades
 *        description: shades
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
router.post("/get", auth,shadesController.get);

/**
 * @swagger
 * /api/shades/getAll:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all shades
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAll", auth, shadesController.getAll);

/**
 * @swagger
 * /api/shades/update:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: update shade by id
 *    parameters:
 *      - in: body
 *        name: shades
 *        description: shades
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 *            colorShade:
 *              type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/update", auth, shadesController.update);

/**
 * @swagger
 * /api/shades/delete:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete shade by id
 *    parameters:
 *      - in: body
 *        name: shades
 *        description: shades
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
router.post("/delete", auth, shadesController.delete);

module.exports = router;