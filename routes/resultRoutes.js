const ResultController = require("../controllers/resultsController");

const resultsController = new ResultController();

const router = require("express").Router();

router.post("/addResult", resultsController.addResult.bind(resultsController));

router.get(
  "/ getAllResults",
  resultsController.getAllResults.bind(resultsController)
);

router.get("/id", resultsController.getOneResult.bind(resultsController));

router.put("/id", resultsController.updateResult.bind(resultsController));

router.delete("/id", resultsController.deleteResult.bind(resultsController));

module.exports = router;
