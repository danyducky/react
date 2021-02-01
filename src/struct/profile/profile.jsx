import React from 'react'
import './profile.css'
import ava from './img/profile_img.png'
import {Field, Form} from "react-final-form";


const PostAreaForm = (props) => {

    const onSubmit = (values) => {
        props.addPost(values.text)
        values.text = ''
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={ ( {handleSubmit}) => (
                <form onSubmit={handleSubmit} className="postAreaForm">

                    <Field className="box-shadow" component="textarea" name="text" placeholder="Что у вас нового?" />
                    <button className="box-shadow" >Опубликовать</button>

                </form>
            )}


        />
    )
}


const Profile = (props) => { //props.state.profilePage
    const posts = props.posts.map( (el) => <Post name={el.from} message={el.message} /> )

    const ta = React.createRef()

    const addPost = (text) => {
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
                    { props.userProfile.photos !== undefined ?
                        props.userProfile.photos.large ?
                            <img src={props.userProfile.photos.large} width="200" alt=""/>
                            :
                            <img src={ava} alt=""/>
                        :
                        null
                    }
                </div>
            </div>

            <div className="profile__friends box-shadow">
                friends
            </div>

            <div className="content__column_wrap box-shadow">
                <div className="content">
                    <div className="content__name">
                        {props.userProfile.fullName}
                    </div>
                </div>
            </div>

            <div className="wall__wrapper">
                <PostAreaForm addPost={props.addPost} />
                {/*<div className="wall__textarea">*/}

                    {/*<textarea onChange={onPostChange} ref={ta} className="box-shadow" placeholder="Что у вас нового?" value={props.newPostText} />*/}
                    {/*<button className="wall__post__button box-shadow" onClick={addPost}>Опубликовать</button>*/}
                {/*</div>*/}
                <div className="wall__content box-shadow">
                    {posts}
                </div>
            </div>
        </div>
    )
}




        // <Form
        //     onSubmit={ (values) => { addPost(values.text) }}
        //     render={ ({handleSubmit}) => {
        //         <form onSubmit={handleSubmit} >
        //             <div className="box-shadow">
        //                 <Field component="textarea" name="text" placeholder="Что у вас нового?"/>
        //             </div>
        //             <div>
        //                 <button type="submit" className="wall__post__button box-shadow">Опубликовать</button>
        //             </div>
        //
        //         </form>
        //     }}
        // />

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