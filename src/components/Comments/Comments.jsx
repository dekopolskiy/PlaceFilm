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


let usr_link = React.createRef(); //1 cоздаешь ссылку на элемент




let Comments = (props) => {
    //map server data in props from State.js
    let users = props.store.state.jsonUser.map((item) => <User id={item.id} name={item.nameUser} />)
    let messages = props.store.state.jsonMessages.map((item) => <One_comment name={item.name} value={item.value} />)
    
    let addUnit = () => {
        let text = usr_link.current.value;//3 по клику есть ли значение в ссылке
        props.store.state.test = '';
        props.store.addUser(77, text);
    }

    let onChng = () => {
        props.store.state.test = usr_link.current.value;
        props.store.renderApp();
    }
    
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
                <div>
                    <textarea ref={usr_link} onChange={onChng} value={props.store.state.test}></textarea> {/*2 присваиваешь ссылку к элементу*/}
                    <button onClick={ addUnit }>add User</button>
                </div>

            </div>
        </div>
    )
}


export default Comments;