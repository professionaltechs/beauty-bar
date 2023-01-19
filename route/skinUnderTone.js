const skinUnderToneController = require('../controller/skinUnderTone')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinUnderTone/createSkinUnderTone:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinUnderTone
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/createSkinUnderTone", auth, skinUnderToneController.createSkinUnderTone);

/**
 * @swagger
 * /api/skinUnderTone/getSkinUnderToneById:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
 * /api/skinUnerTone/getAllSkinUnderTones:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all skinUnderTones 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllSkinUnderTones", auth, skinUnderToneController.getAllSkinUnderTones);

/**
 * @swagger
 * /api/skinUnderTone/updateSkinUnderToneById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Update skinUnderTone
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
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/updateSkinUnderToneById", auth, skinUnderToneController.updateSkinUnderToneById);

/**
 * @swagger
 * /api/skinUnderTone/deleteSkinUnderToneById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinUnderTone by Id
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
router.post("/deleteSkinUnderToneById", auth, skinUnderToneController.deleteSkinUnderToneById);

module.exports = router;