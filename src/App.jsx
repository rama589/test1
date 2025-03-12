import pageTitle from "../components/pageTitle";
import TopAppBar from "../components/TopAppBar";
import Sidebar from "../components/Sidebar";
import Greetings from "./Pages/Greetings";
import PromptField from "../components/PromptField";
import { useToggle } from "./hooks/useToggle";
import { motion } from "framer-motion";

import React from "react";

const App = () => {

  const[isSidebarOpen,toggleSidebar] = useToggle();


  return(
    <>
   <pageTitle title='Talk to Ibn Rushd AI'/>

   <div className="lg:grid lg:grid-cols-[320px,1fr]">
   <Sidebar 
   isSidebarOpen={isSidebarOpen}
   toggleSidebar={toggleSidebar}
   />
  <div className='h-screen grid grid-rows-[max-content,minmax(0,1fr),max-content]'>

      <TopAppBar  toggleSidebar={toggleSidebar}/>


      <div className="px-5 pb-5 flex flex-col overflow-y-auto">
     <div className="max-w-[840px] w-full mx-auto grow">
      <Greetings/>
      </div>
      </div>

      <div className="bg-light-background
      dark:bg-dark-background">
        <div className="max-w-[870px] px-5 w-full mx-auto">
           <PromptField/>

        <motion.p 
        initial={{opacity:0, translateY:'-4px' }}
        animate={{opacity:1, translateY:0}}
        transition={{damping:0.2, delay:0.8, ease:'easeOut'}}
        className="text-bodySmall text-center
        text-light-onSurfaceVariant
        dark:text-dark-onSurfaceVariant p-3">
        To find more effectiveness and more enjoyment, talk to Ibn Rushd AI
        <a 
        href="" 
        target="_blank"
        className="inline underline ms-1"
        >
Make sure you do not share your information with anyone.

        </a>
        </motion.p>
        </div>
      </div>
    </div>
   </div>
    </>
  )  
};


export default App;
