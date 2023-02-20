const skinToneController = require('../controller/skinTone')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinTone/getSkinToneById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get skinTone by Id
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
router.post("/getSkinToneById", auth, skinToneController.getSkinToneById);

/**
 * @swagger
 * /api/skinTone/getAllSkinTones:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all skinTones
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
router.post("/getAllSkinTones", auth, skinToneController.getAllSkinTones);

module.exports = router;