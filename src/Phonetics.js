import React from "react";

import "./Phonetics";   

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
      <br />
       <span className="text">{props.phonetic.text}</span>
    </div>
  )
}