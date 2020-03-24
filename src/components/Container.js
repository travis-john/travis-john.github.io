import React from "react";

function Container(props, {children}) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} {...children} />;
}

export default Container;
