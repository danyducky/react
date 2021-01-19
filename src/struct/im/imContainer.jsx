import Im from "./im";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        chats: state.imPage.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const ImContainer = connect(mapStateToProps, mapDispatchToProps)(Im)

export default ImContainer;