/**
 * @swagger
 * components:
 *   schemas:
 *     Quiz:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *         - quizLink
 *         - category
 *         - quizName
 *         - UserId
 *
 *       properties:
 *         question:
 *           type: string
 *           description: quiz first name
 *         answer:
 *           type: string
 *           description: quiz last name
 *         quizLink:
 *           type: string
 *           description: link of User
 *         category:
 *           type: integer
 *           description: quiz id
 *         quizName:
 *           type: string
 *           description: quiz id
 *       example:
 *         question: name of H2O
 *         answer: Carbonhydrate
 *         quizLink : 7980hoip0i-
 *         category: History
 *         quizName: form1 Chemistory
 */

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Quiz managing API
 * /Quiz/getAllQuizzes:
 *   get:
 *     summary: Lists all Quiz
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Quiz id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *
 * /Quiz/addQuiz:
 *   post:
 *     summary: Create a new Quiz
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200:
 *         description: created Quiz.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       500:
 *         description: Some server error
 *
 * /Quiz/{id}:
 *   get:
 *     summary: Get Quiz by id
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Quiz id
 *     responses:
 *       200:
 *         description: Quiz response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Quiz was not found
 *   put:
 *    summary: Update Quiz by id
 *    tags: [Quiz]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Quiz id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Quiz'
 *    responses:
 *      200:
 *        description: Quiz was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Quiz'
 *      404:
 *        description: Quiz was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Quiz by id
 *     tags: [quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Quiz id
 *
 *     responses:
 *       200:
 *         description: Quiz was deleted
 *       404:
 *         description: Quiz was not found
 */

const QuizController = require("../controllers/quizzesController");

const quizzesController = new QuizController();

const router = require("express").Router();

router.post("/addQuiz", quizzesController.addQuiz.bind(quizzesController));

router.post(
  "/getAllQuestions",
  quizzesController.getAllQuizzes.bind(quizzesController)
);

router.get("/:id", quizzesController.getOneQuiz.bind(quizzesController));

router.put("/:id", quizzesController.updateQuiz.bind(quizzesController));

router.delete("/:id", quizzesController.deleteQuiz.bind(quizzesController));

module.exports = router;
