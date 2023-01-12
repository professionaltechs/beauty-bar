const skinConcernController = require('../controller/skinConcern')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/skinConcern/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/create", auth, skinConcernController.create);

/**
 * @swagger
 * /api/skinConcern/get:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch skinConcern by Id 
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern.
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
router.post("/get", auth, skinConcernController.get);

/**
 * @swagger
 * /api/skinConcern/getAll:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: fetch all skinConcern 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAll", auth, skinConcernController.getAll);

/**
 * @swagger
 * /api/skinConcern/update:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - title
 *          properties:
 *            id:
 *              type: string
 *            title:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/update", auth, skinConcernController.update);

/**
 * @swagger
 * /api/skinConcern/delete:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    description: Create new skinConcern
 *    parameters:
 *      - in: body
 *        name: skinConcern
 *        description: skinConcern
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
router.post("/delete", auth, skinConcernController.delete);

module.exports = router;