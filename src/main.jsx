import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Providers/AuthProvider';
import Home from './Components/Home/Home.jsx';
// import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home/> ,
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
            <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
