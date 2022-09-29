import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoute"
import Expenses from "./DashboardPage/Expenses"
import Invoices from "./DashboardPage/Invoices"
import Manage from "./DashboardPage/Manage"
import Projects from "./DashboardPage/Projects"
import Reports from "./DashboardPage/Reports"
import Team from "./DashboardPage/Team"
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
            <Route path="/harvest/dashboard/projects" element={<PrivateRoute><Projects /></PrivateRoute>}></Route>
            <Route path="/harvest/dashboard/team" element={<PrivateRoute><Team /></PrivateRoute>}></Route>
            <Route path="/harvest/dashboard/reports" element={<PrivateRoute><Reports /></PrivateRoute>}></Route>
            <Route path="/harvest/dashboard/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>}></Route>
            <Route path="/harvest/dashboard/manage" element={<PrivateRoute><Manage /></PrivateRoute>}></Route>
        </Routes>
    )
}