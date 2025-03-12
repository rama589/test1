
import PropTypes from "prop-types";
import Logo from "./logo";
import { ExtendedFab } from "./Button";
import { NavLink } from "react-router-dom";
import { IconBtn } from "./Button";
import { motion } from "framer-motion";

const Sidebar =({isSidebarOpen,toggleSidebar,data}) => {
 
    console.log(data);
return (
    <>
<motion.div 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.2,ease:'easeOut'}}
className={`sibedar ${isSidebarOpen? 'active' :'' }`}>
    <div className="sibedar-inner">
        <div className="h-16 grid items-center px-4 mb-4">
        <Logo/>
        </div>

        <ExtendedFab 
        href='/'
        text ='New chat'
        classes='' 
        onClick={toggleSidebar}
       
        />
 
        <div className="overflow-y-auto -me-2 pe-1">
            <p className="text-titleSmall h-9 grid items-center px-4">
                Recent
            </p>
        <nav>
        <div className="relative group">
        
                 <NavLink
                 to=''
                 className="nav-link"
                 title=""
                 onClick={toggleSidebar}
                 >
                   <span className="material-symbols-rounded 
                   icon-small">
                    chat-bubble
                   </span>

                   <span className="truncate">New conversation</span>

                   <div className="state-layer"></div>
                 </NavLink>
                 <IconBtn
                  icon="delete"
                 size="small"
                Classes="absolute top-1/2 z-10 opacity-0 group-hover:opacity-100"
                title="Delete"
              />
            </div>
            </nav>
        </div> 
        




        <div className="mt-4 h-14 px-4 grid items-center
        text-labelLarge text-light-onSurfaceVariant
        dark:text-dark-onSurfaceVariant border-t
        border-light-surfaceContainerHigh
        dark:border-dark-surfaceContainerHigh truncate">
            &copy; 2025 Rama </div>
    </div>
</motion.div>


<div className={`overlay ${isSidebarOpen ? 'active':''} `}
onClick={toggleSidebar}></div>
</>

);
};

Sidebar.PropTypes={
    isSidebarOpen:PropTypes.bool,
    toggleSidebar:PropTypes.func,
};


export default Sidebar;