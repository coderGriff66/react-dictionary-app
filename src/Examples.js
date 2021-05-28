import React from "react";

import "./Examples.css";

export default function Examples(props) {
    if (props.example) {
     return (
      <div className="Examples">
        <h6><em>Example:</em></h6>
         {props.example};
       </div>
    );
  } else {
  return null;
  }
}
