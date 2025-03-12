import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logolight, logodark } from "../src/assets/assets";

const Logo = ({ classes = "" }) => {
  return (
    <Link
      to="/" // Link يجب أن يكون بحرف كبير
      className={`min-w-max max-w-max h-[24px] ${classes}`}
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
  );
};

// تصحيح التسمية هنا (يجب أن تكون `Logo.PropTypes`)
Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;
