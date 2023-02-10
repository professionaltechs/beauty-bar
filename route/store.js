const storeController = require('../controller/store')
const express = require('express')
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();


/**
 * @swagger
 * /api/store/getStoreById:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get store by Id 
 *    requestBody:
 *      description: store
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
router.post("/getStoreById", auth, storeController.getStoreById);

/**
 * @swagger
 * /api/store/getAllStores:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: get all stores 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllStores", auth, storeController.getAllStores);

module.exports = router;