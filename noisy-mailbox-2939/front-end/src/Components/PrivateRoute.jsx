import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { useSelector } from "react-redux"

export default function PrivateRoute({children}) {

    const { auth } = useSelector(({ authReducer }) => authReducer)


    if(!auth) {
        return <Navigate to='/harvest/signin' />
    }

    return children
}