const express = require('express')
const shadesController = require("../controller/shades")
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/shades/createShade:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: Create new shade
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - colorShade
 *            properties:
 *              name:
 *                type: string
 *              colorShade:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/createShade", adminAuth,shadesController.createShade);

/**
 * @swagger
 * /api/shades/getShadeById:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get shade by id
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
router.post("/getShadeById", auth,shadesController.getShadeById);

/**
 * @swagger
 * /api/shades/getAllShades:
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
router.post("/getAllShades", auth, shadesController.getAllShades);

/**
 * @swagger
 * /api/shades/updateShadeById:
 *  post:
 *    tags:
 *      - admin
 *    security: 
 *      - bearerAuth: []
 *    description: update shade by id
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
 *              name:
 *                type: string
 *              colorShade:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/updateShadeById", adminAuth, shadesController.updateShadeById);

/**
 * @swagger
 * /api/shades/deleteShadeById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete shade by id
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
router.post("/deleteShadeById", adminAuth, shadesController.deleteShadeById);

module.exports = router;