const express = require('express')
const permissionController = require("../controller/permission")
const auth = require("../functions/authentication");

const router = express.Router();


/**
 * @swagger
 * /api/permission/getPermissionById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get permission by id
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
router.post("/getPermissionById", auth,permissionController.getPermissionById);

/**
 * @swagger
 * /api/permission/getAllPermissions:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all permissions
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAllPermissions", auth, permissionController.getAllPermissions);

module.exports = router;