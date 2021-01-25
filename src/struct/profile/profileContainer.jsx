import {
    pushNewPostAction,
    newPostTextChangerAction,
    setUserProfileAction,
    setLoadStatusAction
} from '../../redux/reducers/profile-reducer'
import Profile from "./profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import React from 'react';
import * as axios from "axios";


class profileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then( (response) => {
                this.props.setUserProfile(response.data)
                this.props.setLoadStatus(false)
            })

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.userProfile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isLoading: state.profilePage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(pushNewPostAction(message))
        },
        onPostChange: (text) => {
            dispatch(newPostTextChangerAction(text))
        },
        setUserProfile: (userProfile) => {
            dispatch(setUserProfileAction(userProfile))
        },
        setLoadStatus: (isLoading) => {
            dispatch(setLoadStatusAction(isLoading))
        }
    }
}

const ProfileRouter = withRouter(profileContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRouter)

export default ProfileContainer;