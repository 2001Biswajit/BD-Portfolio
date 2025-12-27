import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";

import Contact from "./Contact";
import About from "./About";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index: true,
                Component:Home
            },
            {
                path: 'portfolio',
                Component: Portfolio
            },
            {
                path:'testimonials',
                Component: Testimonials
            },
            {
                path:'contact',
                Component:Contact
            },
            {
                path: 'about',
                Component: About
            }
        ]
    }
])

export default router;