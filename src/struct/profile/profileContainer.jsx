import { pushNewPostAction, newPostTextChangerAction } from '../../redux/reducers/profile-reducer'
import Profile from "./profile";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(pushNewPostAction(message))
        },
        onPostChange: (text) => {
            dispatch(newPostTextChangerAction(text))
        }
    }
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
















export default ProfileContainer;