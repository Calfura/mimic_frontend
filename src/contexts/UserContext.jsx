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

    const [userJwt, setUserJwt] = useState("");

    const [decodedJwt, setDecodedUserJwt] = useState({});

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
        setDecodedUserJwt(signUpResult.decodedJwt);
    }

    const makeLoginRequest = async (username, password) => {
        let loginResult = await fetch("http://localhost:3000/users/login", {method: "POST", body: {username, password}});

        console.log("Login result: " + JSON.stringify(loginResult));

        setUserJwt(loginResult.jwt);
        setDecodedUserJwt(loginResult.decodedJwt);
    }

    return <UserDataContext.Provider value={{userJwt, decodedJwt}}>
        <UserDispatchContext.Provider value={{
            makeSignupRequest,
            makeLoginRequest
        }}>
            {children}
        </UserDispatchContext.Provider>
    </UserDataContext.Provider>
}