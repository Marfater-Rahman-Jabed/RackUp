import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../LayOut/Main/Main";
import AppDifferentPage from "../../Pages/AppDifferentPage/AppDifferentPage";
import Pricing from "../../Pages/Pricing/Pricing";
import ClientReviews from "../../Pages/ClientReviews/ClientReviews";
import Terms from "../../Pages/Terms/Terms";
import FAQSPage from "../../Pages/FAQSPage/FAQSPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import About from "../../Pages/About/About";
import Privacy from "../../Pages/Privacy/Privacy";
import Cookies from "../../Pages/Cookies/Cookies";
import Blog1 from "../../Pages/Blog/Blog1/Blog1";
import Blog2 from "../../Pages/Blog/Blog2/Blog2";
import AppDemo from "../../Pages/Demo/AppDemo/AppDemo";
import WebDemo from "../../Pages/Demo/WebDemo/WebDemo";

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
            },
            {
                path: '/faqs',
                element: <FAQSPage></FAQSPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/cookies',
                element: <Cookies></Cookies>
            },
            {
                path: '/blog1',
                element: <Blog1></Blog1>
            },
            {
                path: '/blog2',
                element: <Blog2></Blog2>
            },
            {
                path: '/appdemo',
                element: <AppDemo></AppDemo>
            },
            {
                path: '/webdemo',
                element: <WebDemo></WebDemo>
            }
        ]
    }
])