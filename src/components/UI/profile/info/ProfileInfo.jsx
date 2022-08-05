import React from "react";
import About from "./about/About";
import Header from "./header/Header";

import classes from './ProfileInfo.module.css'

const ProfileInfo = ({lore, nickname, cityStatus}) => {
    return (
        <div class={classes.nick__container}>
            <Header nickname={nickname} cityStatus={cityStatus}/>
            <About>
                {lore}
            </About>
        </div>
    );
}

export default ProfileInfo