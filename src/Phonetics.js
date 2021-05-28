import React from "react";

import "./Phonetics.css";   

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <span><a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        <div className="text">{props.phonetic.text}</div></span>
    </div>
  )
}