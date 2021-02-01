import React from 'react'
import Header from './header'
import {
    getAuthStatusThunk,
    logoutThunk,
    setAuthStatusAction,
    setUserDataAction
} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class headerContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuthStatusThunk();
    // }

    exitClick = () => {
        this.props.logoutThunk();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuthorized} userName={this.props.userData.login} exitClick={this.exitClick}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        isAuthorized: state.auth.isAuthorized,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userData) => {
            dispatch(setUserDataAction(userData))
        },

        setAuthStatus: (isAuthorized) => {
            dispatch(setAuthStatusAction(isAuthorized))
        },

        getAuthStatusThunk: () => {
            dispatch(getAuthStatusThunk())
        },

        logoutThunk: () => {
            dispatch(logoutThunk())
        }
    }
}

// const header = connect(mapStateToProps, mapDispatchToProps)(headerContainer)

// withAuthProps
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(headerContainer);