import { connect } from 'react-redux';
import { SendMessageAC, UpdateNewMessageAC } from '../../redux/dialogs-reduser';
import StoreContext from '../../storeContext';
import Dialog from './Dialog';

// function DialogContener() {

//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().DialogsReduser

//             let updateNewMess = (text) => {
//                 let action = UpdateNewMessageAC(text)
//                 store.dispatch(action)
//             }

//             let sendNewMessage = () => {
//                 store.dispatch(SendMessageAC())
//             }
//             return <Dialog
//                 updateNewMessageBody={updateNewMess}
//                 sendNewMessage={sendNewMessage}
//                 state={state} />
//         }
//         }

//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        state: state.DialogsReduser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(UpdateNewMessageAC(text))
        },
        sendNewMessage: () => {
            dispatch(SendMessageAC())
        }
    }
}

const DialogContener = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContener;