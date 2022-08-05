import React from "react";
import NavbarItem from "../navbarItem/NavbarItem";
import PageImage from "./icon.svg"
import classes from './navbar.module.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const router = useNavigate()

    return (
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">Federacion</div>
    
                <nav className="nav">
                    <NavbarItem href={'/main'}>Осудить!</NavbarItem>
                    <NavbarItem>Рейтинги</NavbarItem>
                    <NavbarItem>Новости</NavbarItem>                    
                    <img src={PageImage} className={classes.navIcon} 
                    onClick={() => {
                            router("/profile")
                        }
                    }/>
                </nav>
            </div>
        </div>
    );
}

export default Navbar