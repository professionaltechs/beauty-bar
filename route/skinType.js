const skinTypeController = require('../controller/skinType')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinType/getSkinTypeById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get skinType by Id 
 *    requestBody:
 *      description: skintype
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
router.post("/getSkinTypeById", auth, skinTypeController.getSkinTypeById);

/**
 * @swagger
 * /api/skinType/getAllSkinTypes:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all SkinTypes
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
router.post("/getAllSkinTypes", auth, skinTypeController.getAllSkinTypes);

module.exports = router;