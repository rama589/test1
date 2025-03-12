import { Link  , useNavigation,useNavigate, useLoaderData} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "../src/hooks/useToggle";
import logout from "../src/utils/logout";
import PropTypes from "prop-types";
import { IconBtn } from "./Button";


import Avatar from "./Avatar";
import Menu from './Menu'
import Menultem from "./Menultem";
import { LinearProgress } from "./progress";


import { logolight,logodark } from "../src/assets/assets";


const TopAppBar = ({toggleSidebar}) => {
    const navigation=useNavigation();


   

    const navigate=useNavigate();

    const [showMenu,setShowMenu ]=useToggle();

    
   const isNormalLoad=navigation.state =='loading'&& 
   !navigation.formData;
    return (
      <header style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        height: "64px",
        padding: "16px",
    }}>
       
       <div className="flex items-center gap-1 ">
                <IconBtn
                    icon="menu"
                    title="Menu"
                    Classes ="lg:hidden"
                    onClick={toggleSidebar}
                   />

<Link
 className="lg:hidden"
    >
      {/* شعار الوضع الفاتح */}
      <img
        src={logolight}
        width={133}
        height={24}
        alt="logo"
        className="dark:hidden"
      />
      {/* شعار الوضع الداكن */}
      <img
        src={logodark}
        width={133}
        height={24}
        alt="logo"
        className="hidden dark:block"
      />
    </Link>

        


        </div>
        <div className="menu-wrapper">
        <IconBtn onClick={setShowMenu}>
           <Avatar 
           name='rama'/>
        </IconBtn>
       <Menu classas={showMenu ? 'active' : ''}>
        <Menultem labelText='Log out' onClick={()=> logout(navigate)}>

        </Menultem>
       </Menu>
       </div>

       <AnimatePresence> {isNormalLoad && <LinearProgress />}
   </AnimatePresence>

    </header> 
    );
};


TopAppBar.PropTypes={
  toggleSidebar:PropTypes.func,
};

export default TopAppBar;