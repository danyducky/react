import {connect} from "react-redux";
import {
    followAction, getUsersThunk,
    setCurrentPageAction, setLoadStatusAction,
    setTotalCountAction,
    setUsersAction,
    unfollowAction
} from '../../redux/reducers/all-reducer'
import React from "react";
import Users from "./allUsers";
import {compose} from "redux";



class allContainer extends React.Component {
    componentDidMount() { // как только весь JSX вмонтировался в DOM дерево - вызывается этот метод и срабатывает лишь раз
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunk(this.props.pageSize, page)
    }

    render() {
        return (
            <Users users={this.props.users} onPageChange={this.onPageChange}
                      follow={this.props.follow} unfollow={this.props.unfollow} currentPage={this.props.currentPage} loadStatus={this.props.isLoading}/>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        users: state.allUsers.users,
        currentPage: state.allUsers.currentPage,
        pageSize: state.allUsers.pageSize,
        totalCount: state.allUsers.totalCount,
        isLoading: state.allUsers.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        },

        follow: (userId) => {
            dispatch(followAction(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAction(userId))
        },

        setTotalCount: (count) => {
            dispatch(setTotalCountAction(count))
        },

        setCurrentPage: (page) => {
            dispatch(setCurrentPageAction(page))
        },

        setLoadStatus: (isLoading) => {
            dispatch(setLoadStatusAction(isLoading))
        },

        getUsersThunk: (pageSize, currentPage) => {
            dispatch(getUsersThunk(pageSize, currentPage))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(allContainer);