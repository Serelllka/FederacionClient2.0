import React from "react";
import {Route, Routes } from 'react-router-dom';
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = ({setActive}) => {
    setActive(true)
    return (
        <Routes>
          <Route path="/"         element={<AuthPage setActive={setActive}/>}/>
          <Route path="/main"     element={<MainPage setActive={setActive}/>}/>
          <Route path="/profile"  element={<ProfilePage setActive={setActive}/>}/>
        </Routes>
    )
}

export default AppRouter