import PropTypes from "prop-types";
import { Link, Form ,useNavigation,useActionData  } from "react-router-dom";
import { useEffect } from "react";
import { banner,logolight,logodark } from "../assets/assets";
import { useSnackbar } from "../hooks/useSnabar";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";
import { AnimatePresence } from "framer-motion";
import { CircularProgress, LinearProgress } from "../../components/progress";
import React from "react";



const Login = () => {

  const error=useActionData();
 
  

  const navigation = useNavigation();


  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message) {
      showSnackbar({ message: error.message,type: 
        "error", 
      });
    }
}, [error, showSnackbar]);
  


  return (
    <>
    <div className="relative w-screen h-screen p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex space-x-4">
          <img
            src={logolight}
            alt="Light logo"
            width={40}
            height={70}
            className="dark:hidden"
          />
          <img
            src={logodark}
            alt="Dark logo"
            width={40}
            height={70}
            className="hidden dark:block"
          />
        </div>

        <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
          <h2 className="text-displaysmall font-semibold
          text-light-onBackground
          dark:text-dark-onBackground text-center
          ">Welcom Back to abn roshd AI</h2>
          <p className="text-bodyLarge
          text-light-onSurfaceVariant
          dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2
          ">
            Enter your abn roshd AI account details.
          </p>

          <form method="post" className="grid grid-cols-1 gap-4">
           
            <TextField
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              required={true}
              autoFocus={true}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              required={true}
            />

            <div className="text-right">
             <Link 
             to='/reset-Link'
             className="Link text-labelLarge inline-block"
             >
                Forgot password?
             </Link>
            </div>

            <Button type="submit"
            disabled={navigation.state == 'submitting'}
            >
              
              {navigation.state=='submitting'?(
               <CircularProgress size="small" />
              ):(
              'Sign in')};
             
              </Button>
          </form>

          <p className="text-bodyMedium
          text-light-onSurfaceVariant
          dark:text-dark-onSurfaceVariant text-center mt-4">
          Don&apos;t have an account? 
            <Link to="/register" 
            className="link text-labelLarge inline-block ms-1 
            text-light-onSurface
            dark:text-dark-onSurface">
            Create an account</Link>
          </p>
        </div>

        <p className="mt-auto mx-auto
        text-light-onSurfaceVariant
        dark:text-dark-onSurfaceVariant
        text-bodyMedium lg:mx-0">
          &copy; 2025 Rama
        </p>
      </div>

      <div className="relative">
        <img src={banner} alt="Banner" className="object-cover w-full h-full" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold z-10">
          Talk to Ibn Rushd AI
        </p>
      </div>
    </div>
<AnimatePresence>
    {navigation.state == 'loading' &&(
      <LinearProgress classes="absolute top-0 left-0 
      right-0"/>
     
    )}
    </AnimatePresence>


    </>
  );
};

export default Login;