
import './App.css'
import { ClickCounter } from './components/ClickCounter/ClickCounter'
import { InputMirror } from './components/InputMirror/InputMirror'
import { LoginForm } from './components/LoginForm/LoginForm'
import { ShowHideButton } from './components/ShowHideButton/ShowHideButton'

function App() {
  

  return (
    <>
    <h1>Práctica de eventos</h1>
    <ClickCounter/>
    <InputMirror/>
    <LoginForm/>
    <ShowHideButton/>
    </>
  )
}

export default App
