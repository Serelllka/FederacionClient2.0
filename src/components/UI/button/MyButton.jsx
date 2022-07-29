import React from "react";
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    if (props.active) {
        return (
            <button {...props} className={classes.active}>
                {children}
            </button>
        );
    }
    return (
        <button {...props} className={classes.unactive}>
            {children}
        </button>
    );
}
export default MyButton 