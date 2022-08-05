import React from "react";
import CityStatus from "./cityStatus/CityStatus";
import Nickname from "./nick/Nickname";

import classes from './Header.module.css'

const Header = ({nickname, cityStatus}) => {
    return (
        <div class={classes.header}>
            <Nickname>
                {nickname}
            </Nickname>
            <CityStatus>
                {cityStatus}
            </CityStatus>
        </div>
    );
}

export default Header