const skinUnderToneController = require('../controller/skinUnderTone')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinUnderTone/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinUnderTone
 *    parameters:
 *      - in: body
 *        name: skinUnderTone
 *        description: skinUnderTone
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
router.post("/create", auth, skinUnderToneController.create);

/**
 * @swagger
 * /api/skinUnderTone/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinUnderTone by Id 
 *    parameters:
 *      - in: body
 *        name: skinUnderTone
 *        description: skinUnderTone.
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
router.post("/get", auth, skinUnderToneController.get);

/**
 * @swagger
 * /api/skinUnerTone/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch all skinUnderTones 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinUnderToneController.getAll);

/**
 * @swagger
 * /api/skinUnderTone/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Update skinUnderTone
 *    parameters:
 *      - in: body
 *        name: skinUnderTone
 *        description: skinUnderTone
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
router.post("/update", auth, skinUnderToneController.update);

/**
 * @swagger
 * /api/skinUnderTone/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinUnderTone by Id 
 *    parameters:
 *      - in: body
 *        name: skinUnderTone
 *        description: skinUnderTone.
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
router.post("/delete", auth, skinUnderToneController.delete);

module.exports = router;