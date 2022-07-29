import React from "react";
import { useState } from "react";
import '../styles/AuthPage.css';
import { UserClient } from "../api/UserClient";
import {useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput"
import MyButton from "../components/UI/button/MyButton"

const config = {
    timetick: 100,
    baseUrl: 'http://localhost:8000'
}

const AuthPage = ({setActive}) => {
    const router = useNavigate()
    setActive(false)
    function handle(e) {
        e.preventDefault()
        setAuthForm({...authForm, status: !authForm.status})
    }

    function signIn(e) {
        e.preventDefault()
        var client = new UserClient(config.baseUrl);
        client.login(authForm.username, authForm.password).then(item => {
            localStorage.setItem('token', item)
            router("/main")
            console.log(item)
        })
    }

    function signUp(e) {
        e.preventDefault()
        // const signUpItem = {
        //     username, 
        //     email,
        //     password
        // }
        alert('sign-up')
    }

    const getFirstButton = () => {
        if (authForm.status) {
            return (
                <MyButton active onClick={signIn}>
                    Уже смешарик
                </MyButton>
            )
        } else {
            return (
                <MyButton active onClick={signUp}>
                    Стать смешариком!
                </MyButton>
            )
        }
    }

    const [authForm, setAuthForm] = useState({
        status: true,
        username: '',
        email: '',
        password: ''
    })

    const getSecondButton = () => {
        if (authForm.status) {
            return (
                <MyButton onClick={handle}>
                    Стать смешариком!
                </MyButton>
            )
        } else {
            return (
                <MyButton onClick={handle}>
                    Уже смешарик
                </MyButton>
            )
        }
    }

    return (
        <div className="intro__inner">
            <p className="intro__title">
                Federacion
            </p>
            <form className="intro__auth__form" onSubmit={signIn}>
                <MyInput
                    value={authForm.username} 
                    onChange={e => setAuthForm({...authForm, username: e.target.value})}
                    type="text" 
                    id="username" 
                    placeholder="USERNAME"
                />
                <MyInput 
                    value={authForm.email}
                    onChange={e => setAuthForm({...authForm, email: e.target.value})}
                    type="text" 
                    id="email" 
                    placeholder="EMAIL"
                />
                <MyInput
                    value={authForm.password}
                    onChange={e => setAuthForm({...authForm, password: e.target.value})}
                    type="password" 
                    id="password" 
                    placeholder="PASSWORD"
                />
                
                {getFirstButton()}
                {getSecondButton()}
            
            </form>
        </div>
    )
}

export default AuthPage