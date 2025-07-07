import React from 'react'

export const LoginForm = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
const userName = event.target.elements.username.value;
const password = event.target.elements.password.value;

        alert(`Usuario: ${userName} / Contraseña: ${password}`);
    }

  return (
    <div>
    <h2>Formulario de Login</h2>
      <form onSubmit={(event)=> onFormSubmit(event)}>
        <input type='text' placeholder='Escriba su nombre' name="username"></input>
        <input type='text' placeholder='Escriba su contraseña' name="password"></input>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
