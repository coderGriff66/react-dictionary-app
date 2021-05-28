import React from "react";

import "./Examples.css";

export default function Examples(props) {
   if (props.examples) {
  return (
    <div>
      <h6><em>Example:</em></h6>
        <div className="Examples">
            {props.example.map(function (example, index) {
        return <div key={index}>{example}/>
        </div>
     })} 
        </div>
    </div>
  );
} else {
  return null;
}
}

