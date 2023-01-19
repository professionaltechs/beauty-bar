const skinTypeController = require('../controller/skinType')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinType/createSkinType:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinType
 *    requestBody:
 *      description: skinType to create
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
router.post("/createSkinType", auth, skinTypeController.createSkinType);

/**
 * @swagger
 * /api/skinType/getSkinTypeById:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all SkinTypes 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllSkinTypes", auth, skinTypeController.getAllSkinTypes);

/**
 * @swagger
 * /api/skinType/updateSkinTypeById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Update SkinType
 *    requestBody:
 *      description: update skintype
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
router.post("/updateSkinTypeById", auth, skinTypeController.updateSkinTypeById);

/**
 * @swagger
 * /api/skinType/deleteSkinTypeById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinType by Id 
 *    requestBody:
 *      description: delete skinType by Id 
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
router.post("/deleteSkinTypeById", auth, skinTypeController.deleteSkinTypeById);

module.exports = router;