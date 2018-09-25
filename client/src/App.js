import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/articles");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
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
