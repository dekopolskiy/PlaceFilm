import styles from './Comments.module.css'
import React from 'react';
import AddUserContainer from './AddUser/AddUserContainer';


let Comments = () => {
    return (
        <div>
            {/*_______________RENDER__________________ */}
            <div className={styles.comments}>
                <h2>Messages</h2>
                <div className={styles.users}>
                <AddUserContainer/>
                </div>
                <div className={styles.messages}>
                </div>
            </div>
        </div >
    )

}


export default Comments;