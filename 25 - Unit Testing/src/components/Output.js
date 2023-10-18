import React from "react";

const Output = (props) => {
  return (
    <div style={{ padding: "1em 2em", textAlign: "center" }}>
      {props.children}
    </div>
  );
};

export default Output;
