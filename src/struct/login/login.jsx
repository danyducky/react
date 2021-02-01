import React from 'react'
import {NavLink, Redirect} from "react-router-dom";
import './login.css'
import {Form, Field} from "react-final-form";
import {connect} from "react-redux";
import {
    loginThunk,
    setAuthStatusAction,
    setUserDataAction,
    setWarningMessageAction
} from "../../redux/reducers/auth-reducer";




const Login = () => {
    return (
        <div className="header__login">
            <NavLink to="/login" >
                Войти
            </NavLink>
        </div>
    )
}

const onSubmit = (values, props) => {
    // По нажатию на button - сюда приходят данные из полей формы
    props.loginThunk(values)
}


export const LoginPage = (props) => {
    return (
        <div className="login">
            <Form
                onSubmit={ (values) => {
                    onSubmit(values, props)
                }}
                render={ ( {handleSubmit}) => (
                    <form onSubmit={handleSubmit} className="login__form" >
                        {props.isAuthorized ? <Redirect to="/profile"/> : null }
                        <div className="login__form__email">
                            <Field name="email" placeholder="Введите почту" component="input" />
                        </div>

                        <div className="login__form__password">
                            <Field name="password" placeholder="Введите пароль!" component="input" type="password" />
                        </div>

                        <div className="login__form__checkbox">
                            <Field name="checkbox" type="checkbox" component="input" /> Запомнить меня!
                        </div>

                        <div className="login__form__button">
                            <button type="submit">Войти</button>
                        </div>

                    </form>
                )}


            />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        warningMessage: state.auth.warningMessage,
        isAuthorized: state.auth.isAuthorized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWarningMessage: (warningMessage) => {
            dispatch(setWarningMessageAction(warningMessage))
        },
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




export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)


export default Login;