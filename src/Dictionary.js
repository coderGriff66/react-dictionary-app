import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeyword(event) {
     setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
       <form onSubmit={search}>
        <div className="row">
          <div className="col-8">
            <input type="search" onchange={handleKeyword} placeholder="Type a word" className="form-control shadow sm" autoFocus="on" autoComplete="off" />
          </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-info"/>
            </div>
        </div>
      </form>
    </div>
    
  )

}