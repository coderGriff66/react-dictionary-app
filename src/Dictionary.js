import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

   function handleResponse(response) {
     setResults(response.data[0]);
   }

  function search(event) {
    event.preventDefault();
     // api documentation - https://dictionaryapi.dev/e 
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
 
  function changedKeyword(event) {
     setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <div className="row">
            <div className="col-8">
              <input type="search" onChange={changedKeyword} placeholder="Type a word" className="form-control shadow sm" autoFocus="on" autoComplete="off" />
            </div>
              <div className="col-3">
                <input type="submit" value="search" className="btn btn-info"/>
              </div>
          </div>
        </form>
      
        <span className="Hints"><strong>Suggested words:</strong> <em>adoration, sunset, persnickety, love, parlay, native</em></span></section>
      <Results results={results} />
    </div>
  );
}