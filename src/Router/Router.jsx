import { createBrowserRouter } from "react-router-dom";


import App from '../App.jsx'
import Register from "../Pages/Register.jsx";
import Login from "../Pages/Login.jsx";
import RestLink from "../Pages/RestLink.jsx";

import registerLoders from "./loders/registerLoders.js";
import loginLoders from "./loders/loginLoders.js";
import restLinkLoder from "./loders/RestLinkLoders.js";
import appLoader from "./loders/appLoader.js";

import appAction from "../account/AppAction.js";
import registerAction from "../account/registerAction.js";
import loginAction from "../account/loginAction.js";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      action: appAction,
      children:[
        {
          path: '/:conversationId',
        }
      ]
     
    },
    {
      path: '/register',
      element: <Register />,
      loader: registerLoders,
      action: registerAction,
    },
    {
      path: '/Login',
      element: <Login />,
      loader: loginLoders,
      action: loginAction,
    
    },
    {
      path: '/reset-Link',
      element: <RestLink />,
      action: restLinkLoder,
    }
  ]);
  
  export default router;
  