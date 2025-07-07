
import './App.css'
import { ClickCounter } from './components/ClickCounter/ClickCounter'
import { DoubleClickCounter } from './components/DoubleClickCounter/DoubleClickCounter'
import { FocusInput } from './components/FocusInput/FocusInput'
import { HoverBox } from './components/HoverBox/HoverBox'
import { InputMirror } from './components/InputMirror/InputMirror'
import { KeyCounter } from './components/KeyCounter/KeyCounter'
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
    <KeyCounter/>
    <FocusInput/>
    </>
  )
}

export default App
