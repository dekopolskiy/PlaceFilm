import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'

const User = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.nameUser}</NavLink>
        </div>
    )
}

//Database json users
let jsonDatabaseUser = [
    { id: 1, nameUser:'Ivan'},
    { id: 2, nameUser:'Aleksey'},
    { id: 3, nameUser:'Fedor'},
    { id: 4, nameUser:'Dmitry'},
    { id: 5, nameUser:'Smerdyakov'}
]


//map Database_users
let users_map = jsonDatabaseUser.map(( item ) => <User id={item.id} name={item.nameUser} /> )

let Comments = () => {
    return (
        <div>
            <div class={styles.comments}>
                <h2>Messages</h2>       
                <div className={styles.users}>
                    {users_map}
                    {console.log(users_map)}
                </div>
                <div className={styles.messages}>
                    <One_comment name='first' value='Hi!!!'/>
                    <One_comment name='second' value='How are you?'/>
                    <One_comment name='third' value='Do you speak english?'/>
                </div>
            </div>
        </div>
    )
}


export default Comments;