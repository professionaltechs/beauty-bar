const express = require('express')
const auth = require("../functions/authentication");
const subCategoryController = require("../controller/subCategory")

const router = express.Router();

/**
 * @swagger
 * /api/subCategory/createSubCategory:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: Create new sub category
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:  
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *              categoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/createSubCategory", auth, subCategoryController.create);

/**
 * @swagger
 * /api/subCategory/getSubCategory:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get sub category by id
 *    requestBody:
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
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getSubCategory", auth, subCategoryController.get);

/**
 * @swagger
 * /api/subCategory/getSubCategoriesByCatId:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get subCategories by category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - categoryId
 *            properties:
 *              categoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getSubCategoriesByCatId", auth, subCategoryController.getSubCategoriesByCatId);

/**
 * @swagger
 * /api/subCategory/getAllSubCategory:
 *  post:
 *    tags:
 *      - user
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: get all subCategories
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/getAllSubCategory", auth, subCategoryController.getAll);

/**
 * @swagger
 * /api/subCategory/updateSubCategory:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: update sub category by id
 *    requestBody:
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
 *              title:
 *                type: string
 *              image:
 *                type: string
 *              categoryId:
 *                type: string
 *    responses:
 *      '200':
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/updateSubCategory", auth,subCategoryController.update);

/**
 * @swagger
 * /api/subCategory/deleteSubCategory:
 *  post:
 *    tags:
 *      - admin
 *    security:
 *      - bearerAuth: []
 *    description: delete sub category by id
 *    requestBody:
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
 *        description: 200 OK response
 *      '404':
 *        description: Not Found
 *      '500':
 *        description: Internal Server Error
 */
router.post("/deleteSubCategory", auth, subCategoryController.delete);

module.exports = router;