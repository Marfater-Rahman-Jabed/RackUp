import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../LayOut/Main/Main";
import AppDifferentPage from "../../Pages/AppDifferentPage/AppDifferentPage";
import Pricing from "../../Pages/Pricing/Pricing";
import ClientReviews from "../../Pages/ClientReviews/ClientReviews";
import Terms from "../../Pages/Terms/Terms";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/makeDiv',
                element: <AppDifferentPage></AppDifferentPage>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/reviews',
                element: <ClientReviews></ClientReviews>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
])