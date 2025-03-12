import PropTypes from "prop-types";

import { avatars } from "../src/lib/Appwrite";

const Avatar = ({name}) => {
    return (
   <figure className="avatar">
    <img src={avatars.getInitials(name,48,48)}
     alt={name}
     width={48}
     height={48}
     />
   </figure>
    );
};

Avatar.PropTypes = {
    name:PropTypes.string
}


export default Avatar;