import { NavLink, Route } from 'react-router-dom';
import './content.css'
import './../modificators.css'
import { dialogWithUser } from '../im/im.jsx'
import React from "react";
import ProfileContainer from "../profile/profileContainer";
import ImContainer from "../im/imContainer";
import {Provider} from "react-redux";

// import header from '../header/header.module.css'
//  Provider - метод, который позволяет всем своим child передать какие-либо props-ы

const Content = (props) => {
    return (

        <div className="full__wrapper">
            <div className="nav__wrapper">
                <div className="nav__inner">
                    <NavLink to="/danyducky">Моя страница</NavLink>
                    <a href="#">Новости</a>
                    <NavLink to="/im">Мессенджер</NavLink>
                    <a href="#">Друзья</a>
                    <a href="#">Сообщества</a>
                    <a href="#">Фотографии</a>
                    <a href="#">Музыка</a>
                    <a href="#">Видео</a>
                    <a href="#">Клипы</a>
                </div>
            </div>
            
            <Route path="/im_1" component={dialogWithUser} />
            <Provider store={props.store}>
                <Route path="/danyducky" render={() => <ProfileContainer />} />
                <Route path='/im' render={() => <ImContainer />} />
            </Provider>

        </div>
    )
}

export default Content;