/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Categoty from './Categoty/Categoty';
import News_Page from './Layouts/News_Page';
import News_ph from './News/News_ph';
import AuthProvaider from './Provaiders/AuthProvaider/AuthProvaider';
import LoginLayout from './Layouts/LoginLayout/LoginLayout';
import Login from './Layouts/LoginLayout/Login/Login';
import Register from './Layouts/LoginLayout/Register/Register';
import PRoute from './Routes/PRoute';
import Terms from './Layouts/LoginLayout/Register/Terms';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/categoty/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      },
    ]
  },
  {
    path: "categoty",
    element: <Main></Main>,
    children: [
      // {
      //   path: '/',
      //   element: <Categoty></Categoty>,
      //   loader: () => fetch('http://localhost:5000/news')
      // },
      {
        path: ':id',
        element: <Categoty></Categoty>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
        // loader: fetch(`http://localhost:5000/categories/${id}`)
      },
      // {
      //   path: '/news/:id',
      //   element: <News_Page></News_Page>
      // }
    ]
  },
  {
    path: '/news',
    element: <News_Page></News_Page>,
    children: [
      {
        path: ':id',
        element: <PRoute><News_ph></News_ph></PRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </React.StrictMode>,
)
