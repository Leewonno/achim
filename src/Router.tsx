// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Main from './route/Main';
import Signin from './route/Signin';
import Signup from './route/Singup';
import Notice from './route/Notice';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path:"signin",
                element:<Signin />
            },
            {
                path:"signup",
                element:<Signup />
            },
            {
                path:"notice",
                element:<Notice />
            }
        ]
    },
]);

export default router;