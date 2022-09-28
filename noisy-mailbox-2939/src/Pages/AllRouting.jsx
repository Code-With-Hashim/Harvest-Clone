import { Route, Routes } from "react-router-dom"
import Home from "./Home"

export default function AllRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}