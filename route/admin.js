// const express = require('express')
// const adminController = require("../controller/admin");
// const router = express.Router();
// const auth = require("../functions/authentication");
// const adminAuth = require("../functions/adminAuthentication");

// /**
//  * @swagger
//  * /api/admin/createAdmin:
//  *  post:
//  *    tags:
//  *      - admin
//  *    description: Create New Admin
//  *    requestBody:
//  *      description: Admin to create
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            required:
//  *              - email
//  *              - password
//  *            properties:
//  *              email:
//  *                type: string
//  *              password:
//  *                type: string
//  *              fistName:
//  *                type: string
//  *              lastName:
//  *                type: string
//  *    responses:
//  *      '200':
//  *        description: response on status 200
//  */
// router.post("/createAdmin", adminController.createAdmin);

// /**
//  * @swagger
//  * /api/admin/signIn:
//  *  post:
//  *    tags:
//  *      - admin
//  *    description: Admin SignIn(login) Api
//  *    requestBody:
//  *      description: admin to login
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            required:
//  *              - email
//  *              - password
//  *            properties:
//  *              email:
//  *                type: string
//  *              password:
//  *                type: string
//  *    responses:
//  *      '200':
//  *        description: response on status 200
//  */
// router.post("/signIn", adminController.signIn);

// /**
//  * @swagger
//  * /api/admin/getAdminDetails:
//  *  post:
//  *    tags:
//  *      - admin
//  *    description: Admin Details
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            required:
//  *              - id
//  *            properties:
//  *              id:
//  *                type: string
//  *    responses:
//  *      '200':
//  *        description: response on status 200
//  */
// router.post("/getAdminDetails", adminController.getAdminDetails);

// /**
//  * @swagger
//  * /api/admin/getUserList:
//  *  post:
//  *    tags:
//  *      - admin
//  *    security:
//  *      - bearerAuth: []
//  *    description: get list of all users
//  *    responses:
//  *      '200':
//  *        description: response on status 200
//  */
// router.post("/getUserList", adminAuth, adminController.getUserList);

// module.exports = router;