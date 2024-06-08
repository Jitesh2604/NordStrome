import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [authDetails, setAuthDetails] = useState({
        isSignIn: false,
        token: null,
    });
    
    const signIn = (token) =>{
        setAuthDetails({
            isSignIn: true,
            token: token,
        });
    };

    const signOut = ()=>{
        setAuthDetails({
            isSignIn: false,
            token: null,
        });
    };


    return (
    <AuthContext.Provider value ={{ authDetails, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
  )
}

