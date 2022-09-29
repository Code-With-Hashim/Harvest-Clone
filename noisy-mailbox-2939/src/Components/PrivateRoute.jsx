import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export default function PrivateRoute({children}) {

    const {isAuth} = useContext(AuthContext)

    if(!isAuth) {
        return <Navigate to='/harvest/signin' />
    }

    return children
}