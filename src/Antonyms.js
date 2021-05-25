import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
  return (
    <div className="Antonyms">
            {props.antonyms.map(function (antonyms, index) {
        return  <span key={index}>{antonyms}</span>;
       })} 
        </div>
        );
} else {
  return null;
}
}