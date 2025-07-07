
import './App.css'
import { ClickCounter } from './components/ClickCounter/ClickCounter'
import { DoubleClickCounter } from './components/DoubleClickCounter/DoubleClickCounter'
import { HoverBox } from './components/HoverBox/HoverBox'
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
    <DoubleClickCounter/>
    <HoverBox/>
    </>
  )
}

export default App
