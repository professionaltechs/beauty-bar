const skinConcernController = require('../controller/skinConcern')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinConcern/createSkinConcern:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *            properties:
 *              title:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/createSkinConcern", auth, skinConcernController.createSkinConcern);

/**
 * @swagger
 * /api/getSkinConcernById/get:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get skinConcern by Id 
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
router.post("/getSkinConcernById", auth, skinConcernController.getSkinConcernById);

/**
 * @swagger
 * /api/skinConcern/getAllSkinConcerns:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all skinConcerns
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllSkinConcerns", auth, skinConcernController.getAllSkinConcerns);

/**
 * @swagger
 * /api/skinConcern/updateSkinConcernById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update skinConcern by id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id
 *              - title
 *            properties:
 *              id:
 *                type: string
 *              title:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/updateSkinConcernById", auth, skinConcernController.updateSkinConcernById);

/**
 * @swagger
 * /api/skinConcern/deleteSkinConcernById:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinConcern by id
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
router.post("/deleteSkinConcernById", auth, skinConcernController.deleteSkinConcernById);

module.exports = router;