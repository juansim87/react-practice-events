import { useState } from 'react';

export const DoubleClickCounter = () => {
    
    const [ counter, setCounter ] = useState(0);

    const handleDoubleClick = () => {
        setCounter(counter + 1)

    }

  return (
    <div>
      <h2>Contador de doble click</h2>
      <button onDoubleClick={handleDoubleClick}>Haz doble click</button>
      <p>Dobles clicks: {counter}</p>
    </div>
  )
}
