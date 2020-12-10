import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'

const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


let Comments = (props) => {
    //map server data
    let users = props.dataUsers.map(( item ) => <User id={item.id} name={item.nameUser} />)
    let messages = props.dataMessages.map(( item ) => <One_comment name={item.name} value={item.value} />)

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
            </div>
        </div>
    )
}


export default Comments;