import React from "react";

import classes from './Nickname.module.css'

const Nickname = ({children}) => {
    return (
        <h1 className={classes.nick}>{children}</h1>
    );
}

export default Nickname