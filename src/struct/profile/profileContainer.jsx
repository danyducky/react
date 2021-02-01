import {
    pushNewPostAction,
    newPostTextChangerAction,
    setUserProfileAction, getProfileThunk,
} from '../../redux/reducers/profile-reducer'
import Profile from "./profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import React from 'react';
import {compose} from "redux";


class profileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileThunk(this.props.match.params.userId, this.props.userData.id, this.props)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userData: state.auth.userData,
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

        getProfileThunk: (userId, defaultId, props) => {
            dispatch(getProfileThunk(userId, defaultId, props))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(profileContainer);