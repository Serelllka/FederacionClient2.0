import React from "react";
import classes from './Hobbies.module.css'

const Hobbies = ({children}) => {
    return (
        <div className={classes.hobby}>{children}</div>
    );
}

export default Hobbies