import React from "react";

export default function Examples(props) {
   if (props.examples) {
  return (
    <div>
      <strong><em>Example:</em></strong>
        <div className="Examples">
            {props.example.map(function (example, index) {
        return <div key={index}>{example}>
        </div>
     })} 
        </div>
    </div>
  );
} else {
  return null;
}
}

