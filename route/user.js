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
 *              - phone
 *              - firebase_uid
 *            properties:
 *              phone:
 *                type: string
 *              firebase_uid:
 *                type: string
 *              loginMode:
 *                type: string
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/", userController.signUp);

/**
 * @swagger
 * /api/user/completeProfile:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: complete User Profile
 *    requestBody:
 *      description: this API can also be used update user's profile later on in the app by passing user's id
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              name:
 *                type: string
 *              userId:
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
 *              skinTypeId:
 *                type: string
 *              skinToneId:
 *                type: string
 *              skinUnderToneId:
 *                type: string
 *              followers:
 *                type: integer
 *              posts:
 *                type: integer
 *              skinConcernIds:
 *                type: array
 *                items:
 *                  type: string
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
router.post("/completeProfile", auth, userController.update);

/**
 * @swagger
 * /api/user/deleteUser:
 *  post:
 *    tags:
 *      - user
 *    security:
 *      - bearerAuth: []
 *    description: delete user
 *    responses:
 *      '200':
 *        description: response on status 200
 */
router.post("/deleteUser", auth, userController.delete);

router.post("/stripe", auth, userController.stripe)

router.post("/paypal/:products/:useremail",  userController.paypal);

router.get("/success", userController.successPaypal);

router.get("/afterpurchase/:id/:userEmail", userController.afterpurchase);

module.exports = router;