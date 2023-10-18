import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false)

    const textChangeHandler = () => {
        setChangedText(!changedText)
    }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>It's the changed text</Output>}
        <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
