import React from "react";
import { useState, useEffect } from "react";
import '../styles/AuthPage.css';
import {useNavigate} from "react-router-dom";
import Stats from "../components/UI/profile/stats/Stats";
import classes from '../styles/ProfilePage.module.css';
import RightBar from "../components/UI/profile/rightBar/RightBar";
import ProfileImage from "../components/UI/profile/profileImage/ProfileImage";
import ProfileInfo from "../components/UI/profile/info/ProfileInfo";
import { UserInfoApiClient } from "../utils/ApiClientsInstances";

const ProfilePage = ({setActive}) => {
    const router = useNavigate();
    setActive(true);

    var [userInfo, setUserInfo] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        image: "",
        hobbies: "",
        lore: "",
        sobriquet: ""
    });

    const GetUserInfo = async () => {
        try {
            userInfo = await UserInfoApiClient.getUserInfoAsync(localStorage.getItem('token'))
            setUserInfo(userInfo)
        } catch(e) {
            alert(e.message)
        }
        console.log(userInfo)
    }

    useEffect(() => {
        GetUserInfo()
    }, [])

    return (
        <div className={classes.profilePage}>
            <div className={classes.profile__container}>
                <ProfileImage/>
                <div className={classes.profileMainInfo}>
                    <ProfileInfo lore={userInfo.lore} nickname={userInfo.username} cityStatus={userInfo.sobriquet}></ProfileInfo>
                    <RightBar hobbies={userInfo.hobbies}/>
                </div>
            </div>

            <Stats/>
        </div>
    )
}

export default ProfilePage