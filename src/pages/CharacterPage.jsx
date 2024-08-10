import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserDispatch } from "../contexts/UserContext";
import "../styles/HomePage.css"


export default function HomePage(){

        const [formUsername, setFormUsername] = useState("");
        const [formPassword, setFormPassword] = useState("");
        
        const {makeSignupRequest} = useUserDispatch();
      
        return (
          <>
          <div id="CharacterBody">

          </div>
          </>
        )
      }