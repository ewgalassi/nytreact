require('dotenv').config();
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");

const apikey = process.env.SECRET_KEY

router.get("/nytArticles", (req, res) => {
  const { topic, startYear, endYear } = req.query;
  console.log("server stuff");
  axios
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}`, { params: { q: topic, begin_date: startYear, end_date: endYear }})
    .then(results => console.log(results))
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