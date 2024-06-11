import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../components/SingleBook";
import Blog from "../components/Blog";
import TypeOf from "../home/TypeOf";
import TypeOfBook from "../components/TypeOfBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import Managebook from "../dashboard/Managebook";
import EditBook from "../dashboard/EditBook";
import GenreofBook from "../components/GenreofBook";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/> ,
    element: <App/>,
    children:[
        {
            path :'/',
            element:<Home/>
        },
        {
            path :'/shop',
            element:<Shop/>
        },
        {
            path :'/about',
            element:<About/>
        },
        {
            path :'/typeofbook',
            element:<TypeOfBook/>
        },
        {
            path :'/genreofbook',
            element:<GenreofBook/>
        },
        {
            path :'/singlebook',
            element:<SingleBook/>
        },
        {
            path :'/shop',
            element:<Shop/>
        },
        {
            path :'/singlebook/:id',
            element:<SingleBook/>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
    
  },
  {
    path:"/admin/dashboard",
    element:<DashboardLayout/>,
    children:[
        {
            path:"/admin/dashboard",
            element:<Dashboard/>
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
        },{
            path:"/admin/dashboard/manage",
            element:<Managebook/>
        },
        {
            path:"/admin/dashboard/edit-book/:id",
            element:<EditBook/>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
  }
]);
export default router;