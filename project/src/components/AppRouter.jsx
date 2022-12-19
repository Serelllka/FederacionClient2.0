import React from "react";
import {Route, Routes} from 'react-router-dom';
import AuthPage from "../pages/auth/AuthPage";
import MainPage from "../pages/main/MainPage";
import ProfilePage from "../pages/profile/ProfilePage";
import CondemnationLogPage from "../pages/condemnationLog/CondemnationLogPage";

const AppRouter = ({setActive}) => {
    setActive(true)
    return (
        <Routes>
            <Route path="/" element={<AuthPage setActive={setActive}/>}/>
            <Route path="/main" element={<MainPage setActive={setActive}/>}/>
            <Route path="/profile" element={<ProfilePage setActive={setActive}/>}/>
            <Route path="/condemn" element={<CondemnationLogPage setActive={setActive}/>}/>
        </Routes>
    )
}

export default AppRouter