import './App.css';
import Content from './struct/content/content.jsx'
import React from "react";
import HeaderContainer from "./struct/header/headerContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthProps} from "./struct/utils/HOCs/withAuthCheck";
import {beginInit} from "./redux/reducers/app-reducer";
import Loader from "./struct/utils/loader";


class App extends React.Component {

    componentDidMount() {
        this.props.beginInit();
    }

    render() {
        return (
            this.props.init ?
                <div>
                    <HeaderContainer store={this.props.store}/>
                    <Content store={this.props.store}/>
                </div>
                :
                <Loader />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        init: state.app.init
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        beginInit: () => {
            dispatch(beginInit())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App);
