import React from 'react'
import './profile.css'


const Profile = (props) => { //props.state.profilePage
    const posts = props.posts.map( (el) => <Post name={el.from} message={el.message} /> )

    const ta = React.createRef()

    const addPost = () => {
        const text = ta.current.value
        props.addPost(text)
    }

    const onPostChange = () => {
        const text = ta.current.value
        props.onPostChange(text)
    }

    return (
        <div className="grid_wrapper">
            <div className="second__column__wrap">
                <div className="profile__avatar box-shadow">
                    <div className="img" />
                </div>
            </div>

            <div className="profile__friends box-shadow">
                friends
            </div>

            <div className="content__column_wrap box-shadow">
                <div className="content">
                    <div className="content__name">
                        FIO
                    </div>
                </div>
            </div>

            <div className="wall__wrapper">
                <div className="wall__textarea">
                    <textarea onChange={onPostChange} ref={ta} className="box-shadow" placeholder="Что у вас нового?" value={props.newPostText} />
                    <button className="wall__post__button box-shadow" onClick={addPost}>Опубликовать</button>
                </div>
                <div className="wall__content box-shadow">
                    {posts}
                </div>
            </div>
        </div>
    )
}

const Post = (props) => {
    return (
        <div className="wall__content__wrapper">
            <div className="wall__content__post">
                <div className="wall__post__name">
                    {props.name}
                </div>
                <div className="wall__post__message">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Profile;