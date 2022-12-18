import React from "react";

import classes from './About.module.css'

const About = ({children}) => {
    return (
        <div className={classes.about}>
            {children}
        </div>
    );
}

export default About