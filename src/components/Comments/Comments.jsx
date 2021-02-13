import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'
import React from 'react';



const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

let Comments = props => {
    //map server data in props from store.js
    let users = props.pageDialogs.users.map(item => <User id={item.id} name={item.nameUser} />)
    let messages = props.pageDialogs.messages.map(item => <One_comment name={item.name} value={item.value} />)

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



                </div>
                <div className={styles.addMessage}>




                </div>
            </div>
        </div >
    )

}


export default Comments;