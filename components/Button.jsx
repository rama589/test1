import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Children } from "react";
import { motion } from "framer-motion";

const Button = ({
    Classes = '',
    variant = 'filled',
    color = 'primary',
    children,
    ...rest
}) => {
    return (
        <button className={`btn ${variant} ${color} ${Classes}`} {...rest}>
            {children}
            <div className="state-layer"></div>
        </button>
    );
};

Button.propTypes = {
    Classes: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
};

const IconBtn = ({ Classes = '', icon, size = '', children, ...rest }) => {
    return (
        <motion.button
            className={`icon-btn ${size} ${Classes}`}
            {...rest}
        >
            {children}
            {!children && (
                <span className='material-symbols-rounded icon-'>
                    {icon}
                </span>
            )}
            <div className="state-layer"></div>
        </motion.button>
    );
};

IconBtn.propTypes = {
    Classes: PropTypes.string,
    icon: PropTypes.string,     // الأيقونة
    size: PropTypes.string,     // الحجم
    children: PropTypes.any,    // المحتوى الداخلي
};


const ExtendedFab = ({href, text , classes='', ...rest}) =>{
 return <Link to={href} 
 className={`extended-fab ${classes}`}
 {...rest}
 >
<span className="material-symbols-rounded">add</span>

<span className="truncate">{text }</span>

<div className="state-layer"></div>

</Link>;

};

ExtendedFab.propTypes ={
    href: PropTypes.string,
    text : PropTypes.string,
    Classes: PropTypes.string,
}

export { Button, IconBtn, ExtendedFab};