import React from "react";

const Navbar = () => {
    return (
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">Federacion</div>
    
                <nav className="nav">
                    <a className="nav__link nav__text" href="#">Осудить!</a>
                    <a className="nav__link nav__text" href="#">Рейтинги</a>
                    <a className="nav__link nav__text" href="#">Новости</a>
                    {/* <object class="nav__link nav__icon" data="assets/images/icon.svg" height="40px"> </object> */}
                </nav>
            </div>
        </div>
    );
}

export default Navbar