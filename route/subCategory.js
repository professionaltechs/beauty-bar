const express = require('express')
const subCategoryController = require("../controller/subCategory")
const auth = require("../functions/authentication");

const router = express.Router();

/**
 * @swagger
 * /api/subCategory/getSubCategoryById:
 *  post:
 *    tags:
 *      - user
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
router.post("/getSubCategoryById", auth, subCategoryController.getSubCategoryById);

/**
 * @swagger
 * /api/subCategory/getSubCategoriesByCatId:
 *  post:
 *    tags:
 *      - user
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
 * /api/subCategory/getAllSubCategories:
 *  post:
 *    tags:
 *      - user
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
router.post("/getAllSubCategories", auth, subCategoryController.getAllSubCategories);

module.exports = router;