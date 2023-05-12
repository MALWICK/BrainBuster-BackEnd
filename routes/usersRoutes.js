/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - emailAddress
 *         - phone
 *         - password
 *         - isAdmin
 *
 *       properties:
 *         firstName:
 *           type: string
 *           description: User first name
 *         lastName:
 *           type: string
 *           description: User last name
 *         emailAddress:
 *           type: string
 *           description: image of User
 *         phone:
 *           type: integer
 *           description: User email
 *         password:
 *           type: string
 *           description: User password
 *       example:
 *         firstName: Noubissi
 *         lastName: Viany
 *         emailAddress: g696607013@gmail.com
 *         phone: 696607013
 *         password: 1234
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users managing API
 * /user/getAllUsers:
 *   get:
 *     summary: Lists all Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: list of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 * /user/addUser:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: created User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 * /user/{id}:
 *   get:
 *     summary: Get User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *       200:
 *         description: User response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User was not found
 *   put:
 *    summary: Update User by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *
 *     responses:
 *       200:
 *         description: User was deleted
 *       404:
 *         description: User was not found
 */

const UsersController = require("../controllers/usersController");

const usersController = new UsersController();

const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/login", usersController.login.bind(usersController));

router.post("/addUser", usersController.addUser.bind(usersController));

router.get("/getAllUsers", usersController.getAllUsers.bind(usersController));

router.get("/current-user", auth.authToken, usersController.getCurrentUser);

router.get("/:id", usersController.getOneUser.bind(usersController));

router.put("/:id", usersController.updateUser.bind(usersController));

router.delete("/:id", usersController.deleteUser.bind(usersController));

module.exports = router;
