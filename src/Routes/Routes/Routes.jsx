import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../LayOut/Main/Main";
import AppDifferentPage from "../../Pages/AppDifferentPage/AppDifferentPage";

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
            }
        ]
    }
])