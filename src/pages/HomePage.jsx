import { useState } from "react";
import { useUserDispatch } from "../contexts/UserContext";
import "../styles/HomePage.css"


export default function HomePage(){

        const [formUsername, setFormUsername] = useState("");
        const [formPassword, setFormPassword] = useState("");
        
        const {makeLoginRequest} = useUserDispatch();

        // Login request
        return (
          <>
          <div id="Login">
            <input type="text" name="formUsername" id="formUsername" value={formUsername} onChange={(event) => setFormUsername(event.target.value)} />
            <input type="password" name="formPassword" id="formPassword" value={formPassword} onChange={(event) => setFormPassword(event.target.value)} />
      
            <button id="LoginButton" onClick={() => makeLoginRequest(formUsername, formPassword)}>
              Login
            </button>
          </div>
          </>
        )
      }