import Im from "./im";
import {connect} from "react-redux";
import {compose} from "redux";
import React from 'react'
import withAuthCheck, {withAuthProps} from "../utils/HOCs/withAuthCheck";



class ImContainer extends React.Component {


    render() {
        return (
            <Im {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chats: state.imPage.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthProps,
    withAuthCheck
)(ImContainer);