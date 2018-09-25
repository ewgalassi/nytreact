require('dotenv').config();
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");

const apikey = process.env.API_KEY

router.get("/nytArticles", (req, res) => {
  console.log("hitting /nytArticles route")
  const { topic, startYear, endYear } = req.query;
  axios
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}`, { params: { q: topic, begin_date: startYear, end_date: endYear }})
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/articles"
router.route("/articles")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/articles/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;