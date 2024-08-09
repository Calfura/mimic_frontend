import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserDispatch } from "../contexts/UserContext";


export default function HomePage(){

        const [formUsername, setFormUsername] = useState("");
        const [formPassword, setFormPassword] = useState("");
        
        const {makeSignupRequest} = useUserDispatch();
      
        return (
          <>

            <input type="text" name="formUsername" id="formUsername" value={formUsername} onChange={(event) => setFormUsername(event.target.value)} />
            <input type="password" name="formPassword" id="formPassword" value={formPassword} onChange={(event) => setFormPassword(event.target.value)} />
      
            <button id="LoginButton" onClick={() => makeSignupRequest(formUsername, formPassword)}>
              Create a user
            </button>

          </>
        )
      }