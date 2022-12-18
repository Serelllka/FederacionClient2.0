import React from "react";
import classes from './NavbarItem.module.css'

const NavbarItem = ({children, href}) => {
    return (
        <a href={href} className={classes.nav__link+" "+classes.nav__text}>{children}</a>
    );
}

export default NavbarItem