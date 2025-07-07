import React from 'react'
import "./SubmitForm.css";

export const SubmitForm = () => {

    const handleFormSumbit = (event) => {
        event.preventDefault();
        alert("Formulario enviado");
    }

  return (
    <div>
    <h2>Formulario de envío</h2>
      <form onSubmit={handleFormSumbit}>
        <input type='text'/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
