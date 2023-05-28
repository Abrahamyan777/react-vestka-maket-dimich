const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initalState = {
        posts: [
            {id: 1, messages: "hi, how are you ?", likeeCount: 5},
            {id: 2, messages: "by by ", likeeCount: 18},
            {id: 3, messages: "bla bla ", likeeCount: 18},
            {id: 4, messages: "I am fine ", likeeCount: 20},
            {id: 5, messages: "how is this", likeeCount: 10}
        ],
        newPostText: "it-React-curs.com",
        profile: null
}

const ProfileReduser =  (state = initalState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 6, 
                messages: state.newPostText,
                likeeCount: 0
            }
            return{ ...state, posts: [...state.posts, newPost], newPostText: ""   }; 
        case UPDATE_NEW_POST_TEXT:
            return { ...state,newPostText: action.newText };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile }
        default :
            return state
    } 
}

export default ProfileReduser;

export const AddPostAC = () => ({type: ADD_POST})
export const UpdateNewPostTextAC = (text) => ({type : UPDATE_NEW_POST_TEXT, newText: text}) 
export const SetUserProfileAC = (profile) => ({type : SET_USER_PROFILE, profile}) 