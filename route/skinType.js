const skinTypeController = require('../controller/skinType')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinType/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinType
 *    parameters:
 *      - in: body
 *        name: SkinType
 *        description: SkinType
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
router.post("/create", auth, skinTypeController.create);

/**
 * @swagger
 * /api/skinType/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinType by Id 
 *    parameters:
 *      - in: body
 *        name: SkinType
 *        description: SkinType.
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
router.post("/get", auth, skinTypeController.get);

/**
 * @swagger
 * /api/skinType/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch all SkinTypes 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinTypeController.getAll);

/**
 * @swagger
 * /api/skinType/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Update SkinType
 *    parameters:
 *      - in: body
 *        name: SkinType
 *        description: SkinType
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
router.post("/update", auth, skinTypeController.update);

/**
 * @swagger
 * /api/skinType/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinType by Id 
 *    parameters:
 *      - in: body
 *        name: SkinType
 *        description: SkinType.
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
router.post("/delete", auth, skinTypeController.delete);

module.exports = router;