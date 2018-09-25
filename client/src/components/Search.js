import React from "react";

const Search = props =>
    <div>
        <h1>What Articles Would You Like To Search?</h1>
        <form className="form-group">
            <input className="form-control" value={props.topic} placeholder="Topic" />
            <input className="form-control" value={props.startYear} placeholder="Start Year" />
            <input className="form-control" value={props.endYear} placeholder="End Year" />
            <button disabled={!(props.topic)} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Search</button>
        </form>
    </div>;

export default Search;