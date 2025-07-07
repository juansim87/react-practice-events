import { useState } from 'react';
import "./StateCheckBox.css";

export const StateCheckBox = () => {

    const [check, setCheck] = useState(false);

const handleCheck = (event) => {
    setCheck(event.target.checked)  
}

  return (

    <div>
    <h2>Caja de check dinámica</h2>
      <input type="checkbox" id='checkbox' onChange={handleCheck}/>
      <label htmlFor="checkbox" className={check ? "accepted" : "denied"}>{check ? "Activado" : "Desactivado"}</label>
    </div>
  )
}
