import axios from "axios";

export default {
  // Gets all books
  getArticles: function(topic, startYear, endYear) {
    console.log("EGT ARTICLES");
    console.log(topic, startYear, endYear)
    return axios.get("/api/nytArticles", { params: { q: topic, begin_date: startYear, end_date: endYear }});
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
