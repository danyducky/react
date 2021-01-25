import React from "react";
import './all.css'
import profileImage from './img/profile_img.png'
import loading from './img/load.gif'
import {NavLink} from "react-router-dom";

const Users = (props) => { //this.User({id: user.id, name: user.name, img: user.photos.small, followed: user.followed})
    const allUsers = props.users.map((user) => <User img={user.photos.small} id={user.id}
                                                     name={user.name} followed={user.followed}
                                                     follow={props.follow} unfollow={props.unfollow}/>)

    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    pages = pages.map((el) => {
        return (
            props.currentPage === el ?
                <span className="pageNumber activePage">{el}</span>
                :
                <span className="pageNumber" onClick={() => props.onPageChange(el)}>{el}</span>
        )
    })

    return (
        <div className="allUsers__wrapper">
            <div className="allUsers__pages">
                {pages}
            </div>
            {props.loadStatus ? <img className="loadingImage" src={loading} alt=""/> : allUsers}
        </div>
    )
}

const User = (props) => {
    return (

        <div className="user__wrapper">
            <div className="user">
                <NavLink to={`/profile/${props.id}`}>
                    <div className="user__img">
                        {!props.img ? <img src={profileImage} alt=""/> : <img src={props.img} alt=""/>}
                    </div>
                </NavLink>
                <div className="user__id">{props.id}</div>
                <div className="user__fullName">{props.name}</div>
                <div className="user__button">
                    {props.followed ?
                        <button onClick={() => {
                            props.unfollow(props.id)
                        }}>unfollow</button>
                        :
                        <button onClick={() => {
                            props.follow(props.id)
                        }}>follow</button>}
                </div>
            </div>

        </div>

    )
}

export default Users