const userController = require('../controller/user')
const express = require('express')
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/user/:
 *  post:
 *    description: User SignUp(Create User) Api
 *    parameters:
 *      - in: body
 *        name: User
 *        description: The User to login.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - age
 *            - phone
 *            - gender
 *            - profileImage
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            age:
 *              type: string
 *            phone:
 *              type: string
 *            gender:
 *              type: string
 *            aboutMe:
 *              type: string
 *            profileImage:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/", userController.signUp);

/**
 * @swagger
 * /api/user/signIn:
 *  post:
 *    description: User SignIn(login) Api
 *    parameters:
 *      - in: body
 *        name: User
 *        description: The User to login.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/signIn", userController.signIn);

module.exports = router;