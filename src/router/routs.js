import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
import Login from "../pages/Login"



export const Privatroutes = [
 { path: "/about", element: <About />, exact: true },
{ path: "/posts", element: <Posts />, exact: true },
{ path: "/posts/:id", element: <PostIdPage />, exact: true },
// { path: "/", element: <Posts />, exact: true },
// { path: "*", element: <Error />, exact: true },
]
export const Publicroutes = [
    { path: "/login", element: <Login />, exact: true },
   
   ]

