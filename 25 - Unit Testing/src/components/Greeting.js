import React, { useState } from "react";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false)

    const textChangeHandler = () => {
        setChangedText(!changedText)
    }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>It's the changed text</p>}
        <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
