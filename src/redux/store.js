import DialogsReduser from "./dialogs-reduser";
import ProfileReduser from "./profile-reduser";


let store = {
    _state : {
        ProfilePage: {
            posts: [
                {id: 1, messages: "hi, how are you ?", likeeCount: 5},
                {id: 2, messages: "by by ", likeeCount: 18},
                {id: 3, messages: "bla bla ", likeeCount: 18},
                {id: 4, messages: "I am fine ", likeeCount: 20},
                {id: 5, messages: "how is this", likeeCount: 10}
            ],
            newPostText: "it-React-curs.com"
        },
        DialogsPage: {
            dialogs: [
                {id: 1, name: "Dmitri"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Katya"},
                {id: 4, name: "Tom"},
                {id: 5, name: "Alla"},
                {id: 6, name: "Ann"}
            ],
            messages: [
                {id: 1, messages: "Hi"},
                {id: 2, messages: "How are you"},
                {id: 3, messages: "This is my pensel"},
                {id: 4, messages: "how is this "},
                {id: 5, messages: "What time is it"},
            ],
            newMessageText: ""
        }
    },
    _callSubscriber()  {
        console.log("apdated");
    },

    getState()  {
        return state
    },
    subscribe(observer)  {
        callSubscriber = observer;
    }, 
    // _addPost()  {
    //     let newPost = {
    //         id: 6, 
    //         messages: this._state.ProfilePage.newPostText,
    //         likeeCount: 0
    //     }
    //     this._state.ProfilePage.posts.push(newPost)
    //     this._state.ProfilePage.newPostText = ""
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPost(newText)  { 
    //     this._state.ProfilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        this._state.ProfilePage = ProfileReduser(this._state.ProfilePage, action)
        this._state.DialogsPage = DialogsReduser(this._state.DialogsPage, action)

        this._callSubscriber(this._state)
    },  
}


export default store;

window.state  = store;