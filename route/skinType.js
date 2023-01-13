const skinTypeController = require('../controller/skinType')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinType/create:
 *  post:
 *    tags:
 *      - admin
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
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get skinType by Id 
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
router.post("/getAll", auth, skinTypeController.getAll);

/**
 * @swagger
 * /api/skinType/update:
 *  post:
 *    tags:
 *      - admin
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
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete skinType by Id 
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