const QuizController = require("../controllers/quizzesController");

const quizzesController = new QuizController();

const router = require("express").Router();

router.post("/addQuiz", quizzesController.addQuiz.bind(quizzesController));

router.get(
  "/getAllQuizzes",
  quizzesController.getAllQuizzes.bind(quizzesController)
);

router.get("/:id", quizzesController.getOneQuiz.bind(quizzesController));

router.put("/:id", quizzesController.updateQuiz.bind(quizzesController));

router.delete("/:id", quizzesController.deleteQuiz.bind(quizzesController));

module.exports = router;
