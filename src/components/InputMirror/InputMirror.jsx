import { useState } from "react";

export const InputMirror = () => {

    const [text, setText] = useState("");

    const handleText = (event) => {
      setText(event.target.value);
    }

  return (
    <div>
    <h2>Input Espejo</h2>
      <input onChange={handleText}></input>
      <p>{text}</p>
    </div>
  )
}
