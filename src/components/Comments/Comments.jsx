import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'
import React from 'react';
import AddUserToCom from './AddUserToCom/AddUserToCom';
import AddMessageToCom from './AddMessageToCom/AddMessageToCom';
import AddMessageToComContainer from './AddMessageToCom/AddMessageToComContainer';


const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

let Comments = (props) => {
    let pageDialogs = props.state.pageDialogs;
    //map server data in props from store.js
    let users = pageDialogs.users.map((item) => <User id={item.id} name={item.nameUser} />)
    let messages = pageDialogs.messages.map((item) => <One_comment name={item.name} value={item.value} />)


    return (
        <div>
            {/*_______________RENDER__________________ */}
            <div className={styles.comments}>
                <h2>Messages</h2>
                <div className={styles.users}>
                    {users}
                </div>
                <div className={styles.messages}>
                    {messages}
                </div>
                {/*____________ ADD USER,ADD MESSAGE ____________*/}
                <div className={styles.addUser}>
                    <AddUserToCom
                        dispatch={props.dispatch}
                        dialogs={props.state.pageDialogs}
                    />
                </div>
                <div className={styles.addMessage}>
                    <AddMessageToComContainer
                        dispatch={props.dispatch}
                        dialogs={props.state.pageDialogs}
                    />
                </div>
            </div>
        </div >
    )

}


export default Comments;