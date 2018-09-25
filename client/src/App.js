import React, { Component } from "react";
import logo from "./logo.svg";
import API from "./utils/API";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
};

componentDidMount() {
    this.loadArticles();
}

loadArticles = () => {
    API.getArticles()
        .then(res =>
            this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
        )
        .catch(err => console.log(err));
};

deleteArticle = id => {
    API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
        API.saveArticle({
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        })
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    }
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">New York Times Articles</h1>
        </header>
        <div class="container">
          <Search />
          <Results />
          <Saved />
        </div>
      </div>
    );
  }
}

export default App;
