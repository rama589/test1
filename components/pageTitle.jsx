import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const pageTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
  };

  pageTitle.PropTypes= {
    title: PropTypes.string,
  }
  export default pageTitle;