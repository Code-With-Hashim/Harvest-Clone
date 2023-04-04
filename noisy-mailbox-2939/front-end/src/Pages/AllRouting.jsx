import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoute"
import Expenses from "./DashboardPage/Expenses"
import Time from "./DashboardPage/Time"
import Home from "./Home"
import SignIn from "./SignIn"
import Signup from "./Signup"

export default function AllRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/harvest/signin" element={<SignIn />}></Route>
            <Route path="/harvest/dashboard/time" element={<PrivateRoute><Time /></PrivateRoute>}></Route>
            <Route path="/harvest/dashboard/expenses" element={<PrivateRoute><Expenses /></PrivateRoute>}></Route>
        </Routes>
    )
}