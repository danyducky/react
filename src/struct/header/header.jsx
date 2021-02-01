import header from './header.module.css'
import '../header/header.css'
import React from "react";
import Login from "../login/login";
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            {!props.isAuthorized ? <Redirect to="/login"/> : null}
            <div className='wrapper'>
                <div className='header__inner'>
                    <div className='header__inner_logo header-height'>
                        <div className="img" />
                        <div className='text'>
                            вконтакте
                        </div>
                    </div>
                    <div className='header__inner_search header-height'>
                        <form action="" method="get">
                            <input placeholder="Поиск" type="search"/>
                        </form>
                    </div>
                    <div className='header__inner_notifications header-height'>
                        <img src="https://bumper-stickers.ru/28089-thickbox_default/kolokolchik.jpg" width="35" alt=""/>
                        <img src="https://hsl.guru/wp-content/uploads/2016/12/logo-1.png" width="35" alt=""/>
                    </div>
                    <div className='header__inner_profile header-height'>
                        {props.isAuth ?
                            <div className="header__profile__right__wrapper">
                                <NavLink to="/profile">
                                    <div className="header__profile__name">{props.userName}</div>
                                </NavLink>
                                <div className="header__profile__exit" onClick={ props.exitClick }>Выход</div>
                            </div>
                            :
                            <Login />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;