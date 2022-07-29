import React from "react";
import {Route, Routes } from 'react-router-dom';
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";

const AppRouter = ({setActive}) => {
    setActive(true)
    return (
        <Routes>
          <Route path="/"       element={<AuthPage setActive={setActive}/>}/>
          <Route path="/main"   element={<MainPage setActive={setActive}/>}/>
        </Routes>
    )
}

export default AppRouter