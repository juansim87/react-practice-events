import { useState } from "react";

export const KeyCounter = () => {

    const [counter, setCounter] = useState(0);

    const [key, setKey] = useState("");

const handleKeyDown = (event) => {
    setCounter(counter + 1)
    setKey(event.key);

}

  return (
    <div>
    <h2>Contador de teclas</h2>
      <input type='text' onKeyDown={handleKeyDown}></input>
      <p>Contador de teclas pulsadas: {counter}</p>
      <p>Última tecla pulsada: {key}</p>
    </div>
  )
}
