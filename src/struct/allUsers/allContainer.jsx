import {connect} from "react-redux";
import {
    followAction,
    setCurrentPageAction, setLoadStatusAction,
    setTotalCountAction,
    setUsersAction,
    unfollowAction
} from '../../redux/reducers/all-reducer'
import React from "react";
import * as axios from "axios";
import Users from "./allUsers";



class allContainer extends React.Component {
    componentDidMount() { // как только весь JSX вмонтировался в DOM дерево - вызывается этот метод и срабатывает лишь раз
        this.props.setLoadStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then( (response) => {
                this.props.setLoadStatus(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.setLoadStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then( (response) => {
                this.props.setLoadStatus(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })

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
        }
    }
}



const all = connect(mapStateToProps, mapDispatchToProps)(allContainer)

export default all;