const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initalState = {
        users: [  ],
        pageSize: 40,
        totalUserCount: 100,
        currentPage: 1,
        isFetching: false
}

const PeopleReduser =  (state = initalState, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return{ ...u , followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return{ ...u , followed: false}
                }
                return u
            })
        }
        case SET_USERS: {
            return {...state, users: [ ...action.users ]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNamber }
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count/100 }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        default :
            return state
    } 
}

export default PeopleReduser;

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type : UNFOLLOW, userId}) 
export const setUsers = (users) => ({type : SET_USERS, users }) 
export const setCurrent = (pageNamber) => ({type : SET_CURRENT_PAGE, pageNamber}) 
export const setTotalCount = (totalUserCount) => ({type : SET_TOTAL_COUNT, count: totalUserCount}) 
export const setToggle = (isFetching) => ({type : TOGGLE_IS_FETCHING, isFetching}) 