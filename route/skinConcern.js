const skinConcernController = require('../controller/skinConcern')
const express = require('express')
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinConcern/getSkinConcernById:
 *  post:
 *    tags:
 *      - user
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
 *    security:
 *      - bearerAuth: []
 *    description: get all skinConcerns
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
router.post("/getAllSkinConcerns", auth, skinConcernController.getAllSkinConcerns);


module.exports = router;