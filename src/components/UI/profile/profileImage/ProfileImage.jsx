import React from "react";

import classes from './ProfileImage.module.css'

const ProfileImage = ({children}) => {
    return (
        <img
            src="assets\images\564781.png"
            className={classes.profileImage}
        />
    );
}

export default ProfileImage