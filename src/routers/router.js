import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import NewsPosts from "../pages/newsPosts";
import Article from "../pages/article";
import SearchPosts from "../pages/searchPosts";
import SearchArticle from "../pages/searchArticle";
import AboutUs from "../pages/aboutUs";
export const router = createBrowserRouter([{
    path: "/",
    Component : App,
    children : [
        {
            path: '',
            Component : Home
        },
        {
            path: '/about',
            Component : AboutUs
        },
        {
            path: '/search/:query',
            Component : SearchPosts,
        },
        {
            path: '/search/:query/:articleTitle',
            Component : SearchArticle,
        },
        {
            path : '/category/:category',
            Component : NewsPosts
        },
        {
            path : '/category/:category/:articleTitle',
            Component : Article
        },
    ]
}])