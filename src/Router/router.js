import Abouts from "../pages/Abouts";
import Posts from "../pages/Posts";
import PostPages from "../pages/PostPages";
import Login from "../pages/Login";
import ErrorPage from "../components/Error/ErrorPage";

export const privateRoutes=[
    {path:'/about',element:<Abouts/>,exact:true},
    {path:'/page',element:<Posts/>,exact:true},
    {path:'/page/:id',element:<PostPages/>,exact:true},
    {path:'/*',element:<ErrorPage/>,exact:true},
]




export const publicRoutes=[
    {path:'/login',element:<Login/>,exact:true},
    {path:'/*',element:<ErrorPage/>,exact:true},

]


