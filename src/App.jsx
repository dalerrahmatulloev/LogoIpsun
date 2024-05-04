import { Children, useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App