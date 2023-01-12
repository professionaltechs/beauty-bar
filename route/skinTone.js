const skinToneController = require('../controller/skinTone')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinTone/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinTone
 *    parameters:
 *      - in: body
 *        name: skinTone
 *        description: skinTone
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/create", auth, skinToneController.create);

/**
 * @swagger
 * /api/skinTone/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinTone by Id 
 *    parameters:
 *      - in: body
 *        name: skinTone
 *        description: skinTone.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/get", auth, skinToneController.get);

/**
 * @swagger
 * /api/skinTone/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch all skinTones 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinToneController.getAll);

/**
 * @swagger
 * /api/skinTone/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Update skinTone
 *    parameters:
 *      - in: body
 *        name: skinTone
 *        description: skinTone
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - name
 *            - image
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/update", auth, skinToneController.update);

/**
 * @swagger
 * /api/skinTone/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinTone by Id 
 *    parameters:
 *      - in: body
 *        name: skinTone
 *        description: skinTone.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/delete", auth, skinToneController.delete);

module.exports = router;