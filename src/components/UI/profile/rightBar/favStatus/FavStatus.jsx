import React from "react";
import classes from './FavStatus.module.css'

const FavStatus = ({children}) => {
    return (
        <div className={classes.fav__status}>{children}</div>
    );
}

export default FavStatus