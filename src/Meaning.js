import React from "react";

import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {

return (
  <div className="Meaning">
    <h4 className="Speech">{props.meaning.partOfSpeech}</h4>
        
    {props.meaning.definitions.map(function (definition, index) {
    return (
      <div key={index}>
      <span>
        <strong>Definition:</strong> {definition.definition}
        <br />
        <Examples example={definition.examples} />
        <br />
        <Synonyms synonyms={definition.synonyms} />
        <br />
        <Antonyms antonyms={definition.antonyms} />
      </span>
      </div>
    );
})}

 </div>   
    
      
  );
}