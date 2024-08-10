import { Outlet } from "react-router-dom"
import Navbar from "../components/Nav/Navbar"

const BaseLayout = ({ children }) => {
    return (
        <>
        <Navbar/>
        <Outlet />
       </>

    )
}

export default BaseLayout