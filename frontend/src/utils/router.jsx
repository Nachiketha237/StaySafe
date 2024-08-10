import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import Dashboard from "../pages/dashboard";
import Blogs from "../pages/blogs";
import Volunteer from "../pages/volunteer";
import Announcement from "../pages/announcement";
import HelpCenter from "../pages/helpcenter";
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import  AuthProvider  from "../context/AuthProvider";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<AuthProvider><AuthLayout /></AuthProvider>} >
            <Route path='/login' element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Route>,
        <Route path="/" element={<AuthProvider><BaseLayout /></AuthProvider>}>
            <Route index element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/help" element={<HelpCenter />} />
        </Route>
        </Route>
    )
);

export default routes;
