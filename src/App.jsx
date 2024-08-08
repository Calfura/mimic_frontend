import { useState } from 'react'
import './App.css'
import { useUserData, useUserDispatch } from './contexts/UserContext'

function App() {
  const [count, setCount] = useState(0)

  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const {makeSignupRequest} = useUserDispatch();

  return (
    <>
      <input type="text" name="formUsername" id="formUsername" value={formUsername} onChange={(event) => setFormUsername(event.target.value)} />
      <input type="password" name="formPassword" id="formPassword" value={formPassword} onChange={(event) => setFormPassword(event.target.value)} />

      <button onClick={() => makeSignupRequest(formUsername, formPassword)}>
        Create a user
      </button>
    </>
  )
}

export default App
