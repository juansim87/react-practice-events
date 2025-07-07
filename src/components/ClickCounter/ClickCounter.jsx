import { useState } from "react";

export const ClickCounter = () => {

    const [counter, setCounter]= useState(0);

    const handleClickCounter = () => {
        setCounter(counter + 1);
    }

  return (
    <div>
      <h2>Contador de Clicks</h2>
      <button onClick={handleClickCounter}>¡Haz click!</button>
      <p>Veces que se ha hecho click: {counter}</p>
    </div>
  )
}

