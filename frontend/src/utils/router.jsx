import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import Dashboard from "../pages/dashboard";
import Blogs from "../pages/blogs";
import Volunteer from "../pages/volunteer";
import Announcement from "../pages/announcement";
import HelpCenter from "../pages/helpcenter";
import Profile from "../pages/profile";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BaseLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/help" element={<HelpCenter/>} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    )
);

export default routes;
