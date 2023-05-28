import { connect } from 'react-redux';
import { AddPostAC, UpdateNewPostTextAC } from '../../../redux/profile-reduser';
// import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

// function MyPostsContener () {
//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//                 let state = store.getState()

//                 let onAddPost = () => {
//                     store.dispatch(AddPostAC())
//                 }
                
//                 let onPostChangeText = (text) => {
//                     let action = UpdateNewPostTextAC(text)
//                     store.dispatch(action)
//                 }

//                 return <MyPosts  
//                     updatOnChangeText={onPostChangeText} 
//                     onAddPost={onAddPost} 
//                     posts={state.ProfileReduser.posts}
//                     newPostText ={state.ProfileReduser.newPostText}
//                 />
//             } 
//         }
//        </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return{
        state: state.ProfileReduser
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onAddPost: () => {
            dispatch(AddPostAC())
        },
        onPostChangeText: (text) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}


let MyPostsContener = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContener;