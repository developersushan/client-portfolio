import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import GigGallery from "../Pages/GigGallery/GigGallery";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";

export const router = createBrowserRouter([
    {
        path:'/', element:<Main></Main>,children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/home', element:<Home/>
            },
            {
                path:'/gig_gallery', element: <GigGallery/>
            },
            {
                path:'/about', element: <AboutPage/>
            },
            {
                path:'/services' , element:<ServicesPage/>
            },
        ],
    }
])