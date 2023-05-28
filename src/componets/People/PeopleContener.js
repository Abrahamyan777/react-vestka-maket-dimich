import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrent, setTotalCount, setToggle } from "../../redux/people-reduser";
import People from "./People";
import * as axios from 'axios'
import React from 'react'
import Preloder from "../commp/preloder/Preloder";


class PeopleContener extends React.Component {
    componentDidMount() {
        this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNamber) => {
        this.props.setCurrent(pageNamber);
        this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloder />
            :
            <People
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}

            />
        }
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNamber) => {
//             dispatch(setCurrentAC(pageNamber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleAC(isFetching))
//         }

//     }
// }


export default connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrent,
        setTotalCount,
        setToggle
    } )(PeopleContener);
