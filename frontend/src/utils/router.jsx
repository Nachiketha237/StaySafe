import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import Dashboard from "../pages/dashboard";
import Blogs from "../pages/blogs";
import Volunteer from "../pages/volunteer";
import Announcement from "../pages/announcement";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BaseLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/announcement" element={<Announcement />} />
        </Route>
    )
);

export default routes;
