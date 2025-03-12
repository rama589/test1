import PropTypes from "prop-types";
import { Children } from "react";

const Menu=({classas ='' , children})=>{
    return <div className={`menu ${classas}`}>{children}</div>
};


Menu.propTypes ={
    classas: PropTypes.string,
    children: PropTypes.any,

};
export default Menu;