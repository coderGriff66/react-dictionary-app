import React from "react";

export default function Meaning(props) {
console.log(props.meaning);
return (
  <div className="Meaning">
    <h4>{props.meaning.partOfSpeech}</h4>
      <p>
      {props.meaning.definitions[0].definition}
      <br />
      <em>{props.meaning.definitions[0].example}</em>
      </p>
  </div>
  );
}