import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
console.log(props.meaning);
return (
  <div className="Meaning">
    <h4>{props.meaning.partOfSpeech}</h4>
    {props.meaning.definitions.map(function (definition, index) {
    return (
      <div key={index}>
      <p>
        Definition: {definition.definition}
        <br />
        Example: <em>{definition.example}</em>
        <br />
        <Synonyms synonyms={definition.synonyms} />
        <br />
        <Antonyms antonyms={definition.antonyms} />
      </p>
      </div>
    );
})}

 </div>   
    
      
  );
}