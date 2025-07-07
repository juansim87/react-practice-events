
import './App.css'
import { ClickCounter } from './components/ClickCounter/ClickCounter'
import { DoubleClickCounter } from './components/DoubleClickCounter/DoubleClickCounter'
import { ErrorImage } from './components/ErrorImage/ErrorImage'
import { FocusInput } from './components/FocusInput/FocusInput'
import { HoverBox } from './components/HoverBox/HoverBox'
import { InputMirror } from './components/InputMirror/InputMirror'
import { KeyCounter } from './components/KeyCounter/KeyCounter'
import { LoginForm } from './components/LoginForm/LoginForm'
import { ScrollLogger } from './components/ScrollLoger/ScrollLogger'
import { ShowHideButton } from './components/ShowHideButton/ShowHideButton'
import { SubmitForm } from './components/SubmitForm/SubmitForm'

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
    <SubmitForm/>
    <ErrorImage/>
    <ScrollLogger/>
    </>
  )
}

export default App
