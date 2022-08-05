import React from "react";

import classes from './CityStatus.module.css'

const CityStatus = ({children}) => {
    return (
        <div className={classes.city__status}>
            {children}
        </div>
    );
}

export default CityStatus