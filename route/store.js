const storeController = require('../controller/store')
const express = require('express')
const auth = require("../functions/authentication");
const adminAuth = require("../functions/adminAuthentication");

const router = express.Router();

/**
 * @swagger
 * /api/store/createStore:
 *  post:
 *    tags:
 *      - admin
 *      - store
 *    security:
 *      - bearerAuth: []
 *    description: Create new store
 *    requestBody:
 *      description: store to create
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *              - manager
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              manager:
 *                type: string
 *              image:
 *                type: string
 *              coverImage:
 *                type: string
 *              address:
 *                type: string
 *              description:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/createStore", adminAuth, storeController.createStore);

/**
 * @swagger
 * /api/store/storeSignIn:
 *  post:
 *    tags:
 *      - store
 *    description: store signin
 *    requestBody:
 *      description: store signin
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/storeSignIn", storeController.storeSignIn);

/**
 * @swagger
 * /api/store/getStoreById:
 *  post:
 *    tags:
 *      - user
 *      - admin
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
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all stores 
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/getAllStores", auth, storeController.getAllStores);

/**
 * @swagger
 * /api/store/updateStoreById:
 *  post:
 *    tags:
 *      - store
 *    security:
 *      - bearerAuth: []
 *    description: Update store
 *    requestBody:
 *      description: update store
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
 *              name:
 *                type: string
 *              image:
 *                type: string
 *              coverImage:
 *                type: string
 *              address:
 *                type: string
 *              description:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/updateStoreById", adminAuth, storeController.updateStoreById);

/**
 * @swagger
 * /api/store/deleteStoreById:
 *  post:
 *    tags:
 *      - admin
 *      - store
 *    security:
 *      - bearerAuth: []
 *    description: delete store by Id 
 *    requestBody:
 *      description: delete store by Id 
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
router.post("/deleteStoreById", adminAuth, storeController.deleteStoreById);

module.exports = router;