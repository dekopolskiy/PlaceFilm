import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'
import React from 'react';
import AddUserToCom from './AddUserToCom/AddUserToCom';
import AddMessageToCom from './AddMessageToCom/AddMessageToCom';


const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

let Comments = (props) => {

    //map server data in props from store.js
    let users = props.state.users.map((item) => <User id={item.id} name={item.nameUser} />)
    let messages = props.state.messages.map((item) => <One_comment name={item.name} value={item.value} />)


    return (
        <div>
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
                        state={props.state}
                        temp={props.temp}
                    />
                </div>
                <div className={styles.addMessage}>
                    <AddMessageToCom
                        dispatch={props.dispatch}
                        state={props.state}
                        temp={props.temp} />
                </div>
            </div>
        </div>
    )
}


export default Comments;