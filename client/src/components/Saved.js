import React, { Component } from "react";

class Saved extends Component {
    render() {
        return (
            <div>
                <h1>Saved Articles</h1>
                {this.props.length ? (
                    <ul>
                        {this.props.map(article => (
                            <li key={article._id}>
                                <a href={article.url}>
                                    <h3>{article.title}</h3> written {article.date}
                                </a>
                                <span onClick={() => this.deleteArticle(article._id)}>X</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                        <h3>No Saved Articles Yet</h3>
                    )}
            </div>
        )
    }
}

export default Saved;