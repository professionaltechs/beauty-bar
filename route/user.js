const userController = require('../controller/user')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/user/:
 *  post:
 *    tags:
 *      - user
 *    description: User SignUp(Create User) Api
 *    requestBody:
 *      description: User to create
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *              - age
 *              - phone
 *              - gender
 *              - profileImage
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              userId:
 *                type: string
 *              password:
 *                type: string
 *              age:
 *                type: string
 *              phone:
 *                type: string
 *              gender:
 *                type: string
 *              aboutMe:
 *                type: string
 *              profileImage:
 *                type: string
 *              socialMedia:
 *                type: object
 *                properties:
 *                  instagram:
 *                    type: string
 *                  facebook:
 *                    type: string
 *                  youtube:
 *                    type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/", userController.signUp);

/**
 * @swagger
 * /api/user/signIn:
 *  post:
 *    tags:
 *      - user
 *    description: User SignIn(login) Api
 *    requestBody:
 *      description: user to login
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
router.post("/signIn", userController.signIn);

module.exports = router;