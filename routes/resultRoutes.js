/**
 * @swagger
 * components:
 *   schemas:
 *     Result:
 *       type: object
 *       required:
 *         - studentName
 *         - attemps
 *         - earnPoints
 *         - quizResult
 *         - quizName
 *         - UserId
 *         - QuizId
 *
 *       properties:
 *         studentName:
 *           type: string
 *           description: Result first name
 *         attemps:
 *           type: interger
 *           description: Result attemps
 *         earnPoints:
 *           type: interger
 *           description: Result earnedpoints by id
 *         quizResult,:
 *           type: string
 *           description: Result by id
 *         quizName:
 *           type: string
 *           description: quiz name
 *       example:
 *         studentName,: Noubissi
 *         attemps: 3
 *         earnPoints: 40
 *         quizResult: failed
 *         quizName: History
 */

/**
 * @swagger
 * tags:
 *   name: Results
 *   description: Results managing API
 * /result/getAllResults:
 *   get:
 *     summary: Lists all Results
 *     tags: [Results]
 *     responses:
 *       200:
 *         description: list of Results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Results'
 *
 * /result/addResult:
 *   post:
 *     summary: Create a new Results
 *     tags: [Results]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Results'
 *     responses:
 *       200:
 *         description: created Results.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Results'
 *       500:
 *         description: Some server error
 *
 * /result/{id}:
 *   get:
 *     summary: Get Results by id
 *     tags: [Results]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Results id
 *     responses:
 *       200:
 *         description: Results response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Results'
 *       404:
 *         description: Results was not found
 *   put:
 *    summary: Update Results by id
 *    tags: [Results]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Results id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Results'
 *    responses:
 *      200:
 *        description: Results was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Results'
 *      404:
 *        description: Results was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Results by id
 *     tags: [Results]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Results id
 *
 *     responses:
 *       200:
 *         description: Results was deleted
 *       404:
 *         description: Results was not found
 */

const ResultController = require("../controllers/resultsController");

const resultsController = new ResultController();

const router = require("express").Router();

router.post("/addResult", resultsController.addResult.bind(resultsController));

router.get(
  "/getAllResults",
  resultsController.getAllResults.bind(resultsController)
);

router.get("/:id", resultsController.getOneResult.bind(resultsController));

router.put("/:id", resultsController.updateResult.bind(resultsController));

router.delete("/:id", resultsController.deleteResult.bind(resultsController));

module.exports = router;
