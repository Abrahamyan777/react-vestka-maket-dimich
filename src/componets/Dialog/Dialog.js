import css from './Dialog.module.css'
import Users from './users/users';
import UsersMessiges from './usersMessiges/usersMessiges';


function Dialog (props){
    
    let state = props.state
    // console.log(state);
    // console.log(props.sendNewMessage);

    let usersItem = state.dialogs.map(el => <Users  name={el.name} key={el.id} />)
    let UsersMessigesItem = state.messages.map(el => <UsersMessiges message={el.messages}  key={el.id}/>)
    let newMessageText = state.newMessageText

    
    let updateNewMess = (e) => {
        let text = e.target.value
        props.updateNewMessageBody(text)
    }

    let sendMessage = () => {
        props.sendNewMessage()
    }

    return (
        <div className={css.dialogs}>
            <div>
                {usersItem}
            </div>

            <div>
                <div>
                    {UsersMessigesItem}
                </div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageText}
                            placeholder='Eneter your message' 
                            onChange={ updateNewMess }
                            />
                    </div>
                    <div>
                        <button onClick={ sendMessage } >Send</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Dialog;