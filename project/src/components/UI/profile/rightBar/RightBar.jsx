import React from "react";
import Hobbies from "./hobbies/Hobbies";
import FavStatus from "./favStatus/FavStatus";

import classes from './RightBar.module.css'

const RightBar = ({hobbies}) => {
    return (
        <div className={classes.right__bar}>
            <FavStatus>
                Fav_status Loremmmmmmmmmmmmm
            </FavStatus>
            <Hobbies>
                {hobbies}
            </Hobbies>
            
        </div>
    );
}

export default RightBar