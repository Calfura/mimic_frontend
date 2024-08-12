import { useState } from "react";
import React, { useUserDispatch } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { makeLoginRequest } = useUserDispatch();
    const direct = useNavigate();

    const handlerLogin = async (event) => {
        event.preventDefault();
        const loginResponse = await makeLoginRequest(username, password);

        console.log("loginRes", loginResponse)

        if (loginResponse.success === false){
            setError(loginResponse.message);
            console.log("Error LoginPage");
        } else {
            console.log("Else LoginPage");
            setError("");
            handleNavigate("/character");
        };
    }

    const handleNavigate = (path) => {
        direct(path)
    }

    return (
        <div id="LoginBox">
            <div id="LoginContent">
                <form onSubmit={handlerLogin}>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                    <div id="emptySpace" />
                    <button type="submit" id="loginBtn">Login</button>
                    <div>
                        <button onClick={() => handleNavigate("/signup")}>Sign Up</button>
                    </div>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}