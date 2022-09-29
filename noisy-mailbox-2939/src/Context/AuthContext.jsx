import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext()


export default function AuthContextProvider({children}) {
    const [token , setToken] = useState(null)
    const [isAuth, setAuth] = useState(true)


    return (
        <AuthContext.Provider value={{setToken , setAuth , isAuth , token}}>{children}</AuthContext.Provider>
    )

}