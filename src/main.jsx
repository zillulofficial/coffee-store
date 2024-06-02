import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Users from './Components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path:"/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
   loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
