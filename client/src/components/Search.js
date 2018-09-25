import React from "react";

const Search = props =>
    <div>
        <h1>What Articles Would You Like To Search?</h1>
        <form className="form-group">
            <input className="form-control" name="topic" value={props.topic} placeholder="Topic" onChange={props.handleInputChange} />
            <input className="form-control" name="startYear" value={props.startYear} placeholder="Start Year" onChange={props.handleInputChange} />
            <input className="form-control" name="endYear" value={props.endYear} placeholder="End Year" onChange={props.handleInputChange} />
            <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success" onClick={props.handleFormSubmit}>Search</button>
        </form>
    </div>;

export default Search;