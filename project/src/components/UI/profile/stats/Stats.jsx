import React from "react";
import StatsItem from "./statsItem/StatsItem";
import classes from './Stats.module.css'

const Stats = () => {
    return (
        <div className={classes.profile__numbers}>
            <StatsItem> Количество Очков цирка: </StatsItem>
            <StatsItem> Количество Достижений: </StatsItem>
            <StatsItem> Количество Федеракоинов: </StatsItem>
        </div>  
    );
}

export default Stats