import './im.css'
import './../modificators.css'
import { NavLink } from 'react-router-dom'
import React from "react";


const Search = () => {
    return (
        <div className="dialogs__search underline">
            <div className="search">
                <div className="search__img">
                    img
                </div>
                <form action="" method="get">
                    <input placeholder="Поиск" type="search" />
                </form>
            </div>
            <div className="dialogs__search__icons">
                <div className="dialogs__phone__img">
                    phone Img
                </div>
                <div className="dialogs__editMessage__img">
                    edit
                </div>
            </div>

        </div>
    )
}

const Dialog = (props) => {
    return (
        <NavLink to={`/im_${props.id}`}>
            <div className="dialog__wrapper underline">
                <div className="dialog__img">
                    img
                </div>
                <div className="dialog__content">
                    <div className="dialog__content__name"> {props.name} </div>
                    <div className="dialog__content__message"> {props.message} </div>
                </div>
            </div>
        </NavLink>
    )
}

export const dialogWithUser = (props) => {
    return (
        <div>asd</div>
    )
}


const Im = (props) => {
    const chats = props.chats.map((mess) => <Dialog id={mess.id} name={mess.name} message={mess.message} />)

    return (
        <div className="im__full__wrapper">
            <div className="im__dialogs__wrapper box-shadow">
                <Search />
                {chats}
            </div>
            <div className="im__right__wrapper box-shadow">
                <div className="im__all-chats">
                    Все чаты
                </div>
                <div className="im__unread-chats">
                    Непрочитанные
                </div>
                <div className="im__favorite-chats">
                    Важные сообщения
                </div>
            </div>
        </div>
    )
}


export default Im;