import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
  return (
    <div>
    <strong><em>Antonyms:</em></strong>
    <ul className="Antonyms">
            {props.antonyms.map(function (antonyms, index) {
        return  <li key={index}>{antonyms}</li>;
       })} 
        </ul>
        </div>
        );
} else {
  return null;
}
}