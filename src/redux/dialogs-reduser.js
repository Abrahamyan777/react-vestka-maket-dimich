const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initalState = {
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


const DialogsReduser =  (state = initalState, action) => {
    let stateCopy = {...state};

    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:{
            return stateCopy = {
                ...state,
                newMessageText: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText
            return stateCopy = {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 6, messages: body}]
            };
        }
        default:
            return state

    }
}

export default DialogsReduser;

export const SendMessageAC = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageAC = (text) => ({type : UPDATE_NEW_MESSAGE_TEXT, body: text}) 