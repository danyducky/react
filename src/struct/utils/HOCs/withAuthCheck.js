import React from 'react'
import usersAPI from "../../../redux/DAL/dal";
import {connect} from "react-redux";
import {loginThunk, setAuthStatusAction, setUserDataAction} from "../../../redux/reducers/auth-reducer";
import {LoginPage} from "../../login/login";


const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthStatus: (isAuthorized) => {
            dispatch(setAuthStatusAction(isAuthorized))
        },
        setUserData: (userData) => {
            dispatch(setUserDataAction(userData))
        },
        loginThunk: (values) => {
            dispatch(loginThunk(values))
        }
    }
}

export const withAuthProps = (Component) => {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}


// Need to refactor ---------------------
const withAuthCheck = (Component) => {

    return class extends React.Component {

        componentDidMount() {
            usersAPI.getAuthStatus()
                .then( (response) => {
                    if (response.data.resultCode === 0) {
                        this.props.setUserData(response.data.data)
                        this.props.setAuthStatus(true)
                    }
                })
        }

        render() {
            return this.props.isAuthorized ?
            <Component {...this.props} /> : <LoginPage {...this.props}/>

        }
    }
}

export default withAuthCheck;