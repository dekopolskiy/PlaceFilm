import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import React from 'react';
import AddUserContainer from './AddUserToCom/AddUserContainer';
import AddMessageContainer from './AddMessageToCom/AddMessageContainer';



const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

let Comments = () => {
    return (
        <div>
            {/*_______________RENDER__________________ */}
            <div className={styles.comments}>
                <h2>Messages</h2>
                <div className={styles.users}>
                    <AddUserContainer />
                </div>
                <div className={styles.messages}>
                    <AddMessageContainer />
                </div>
            </div>
        </div >
    )

}


export default Comments;