import axios from "axios";
import { useState, createContext, useContext } from "react";


const UserDataContext = createContext(null);
const UserDispatchContext = createContext(null);

export function useUserData(){
    return useContext(UserDataContext)
};

export function useUserDispatch(){
    return useContext(UserDispatchContext);
};


export default function UserProvider({children}){

    const [userJwt, setUserJwt] = useState(localStorage.getItem("userJwt") || "");
    const [decodedJwt, setDecodedJwt] = useState(JSON.parse(localStorage.getItem('decodedJWT') || "{}"));
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

    const storeUserJwt = (value) => {
        setUserJwt(value);
        localStorage.setItem("userJwt", value);
    }

    const storeDecodedJwt = (value) => {
        setDecodedJwt(value);
        localStorage.getItem("decodedJwt", JSON.stringify(value || {}));
    }

    const storeLoggedIn = (value) => {
        setLoggedIn(value);
        localStorage.getItem("loggedIn", value)
    }

    const storeUserId = (value) => {
        setUserId(value);
        localStorage.getItem("userId");
    }

    const makeSignupRequest = async (username, password) => {
        let signUpResult = await fetch("http://localhost:3000/users/", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json"
            }
        });

        signUpResult = await signUpResult.json();

        console.log("Signup result: " + JSON.stringify(signUpResult));

        setUserJwt(signUpResult.jwt);
        setDecodedJwt(signUpResult.decodedJwt);
    }

    const makeLoginRequest = async (username, password) => {
        let bodyData = { username, password };

        try {
            let response = await axios.post(`${API_BASE_URL}/users/jwt`, bodyData);

            const loginResult = response.data;
            console.log("Fetch", response)

            if(response.status !== 200) {
                console.log("error 200")
                return {
                    success: false,
                    message: "Incorrect login details"
                };
            }

            storeUserJwt(loginResult.token);
            storeDecodedJwt(loginResult.setDecodedUserJwt);
            storeLoggedIn(true);
            storeUserId(loginResult.userId);

            return response;
        } catch(error){
            return {
                success:false,
                message: error.response ? error.response.data.message : error.message
            };
        }
    }

    // Reset fields on user logout
    const logout = () => {
        storeUserJwt("");
        storeDecodedJwt({});
        storeLoggedIn(false);
        storeUserId(null);
    }
    
    return <UserDataContext.Provider value={{userJwt, decodedJwt, loggedIn, userId}}>
        <UserDispatchContext.Provider value={{
            makeSignupRequest,
            makeLoginRequest
        }}>
            {children}
        </UserDispatchContext.Provider>
    </UserDataContext.Provider>
}