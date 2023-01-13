const skinToneController = require('../controller/skinTone')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinTone/create:
 *  post:
 *    tags:
 *      - admin
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get skinTone by Id 
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all skinTones 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinToneController.getAll);

/**
 * @swagger
 * /api/skinTone/update:
 *  post:
 *    tags:
 *      - admin
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
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinTone by Id 
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