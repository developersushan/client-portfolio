import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import GigGallery from "../Pages/GigGallery/GigGallery";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import Contact from "../Pages/ContactFrom/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllImage from "../Pages/AllImage/AllImage";
import ViewGig from "../Pages/ViewGig/ViewGig";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/', element:<Main></Main>,children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/login' , element: <Login/>
            },
            // {
            //     path:'/sushanto_prokash_01782153524', element:<SignUp/>
            // },
            {
                path:'/home', element:<Home/>
            },
            {
                path:'/gig_gallery', element: <GigGallery/>
            },
            {
                path:'/view_gig/:id' , element:<ViewGig/>
            },
            {
                path:'/about', element: <AboutPage/>
            },
            {
                path:'/services' , element:<ServicesPage/>
            },
            {
                path:'/contact', element:<Contact/>
            },
            {
                path:'/images' , element: <AllImage/>
            },
            {
                path:'/admin', element:<PrivateRoutes><Dashboard/></PrivateRoutes> 
            },
            

        ],
        

    
        
    }
])