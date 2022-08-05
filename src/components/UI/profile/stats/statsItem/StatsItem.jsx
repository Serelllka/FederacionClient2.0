import React from "react";
import classes from './StatsItem.module.css'

const StatsItem = ({children}) => {
    return (
        <div class="numbers">{children}</div>
    );
}

export default StatsItem