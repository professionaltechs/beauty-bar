const skinUnderToneController = require('../controller/skinUnderTone')
const express = require('express')
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinUnderTone/getSkinUnderToneById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get skinUnderTone by Id
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
 *        description: response on status 200
 */
router.post("/getSkinUnderToneById", auth, skinUnderToneController.getSkinUnderToneById);

/**
 * @swagger
 * /api/skinUnderTone/getAllSkinUnderTones:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all skinUnderTones
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - gender
 *            properties:
 *              gender:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllSkinUnderTones", auth, skinUnderToneController.getAllSkinUnderTones);

module.exports = router;