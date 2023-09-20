import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Componnent/Header/Header.jsx';
import Gaming from './Componnent/Gaming/Gaming.jsx';

const route = createBrowserRouter ([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:'/gaming',
        loader:() => fetch('Gaming.json'),
        element:<Gaming></Gaming>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
