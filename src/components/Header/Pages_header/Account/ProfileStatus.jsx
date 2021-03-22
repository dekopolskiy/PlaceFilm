import styles from './ProfileStatus.module.css'
import React, { useEffect, useState } from 'react'



const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false)

    const sendStatusOnServer = () => {
        setEditMode(false);
        props.set_profile_status_thunk(status)
    } 

    return editMode ?
       /* <textarea 
        onChange={(event) => setStatus(event.target.value)} 
        onBlur={sendStatusOnServer}
        autoFocus
        value={status}></textarea> */
        null
        :(<div onClick={() => setEditMode(true)}>{status}</div>)

}


export default ProfileStatus;


//