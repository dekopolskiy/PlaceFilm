import React from 'react'
import styles from './MyProfile.module.css'

const InfoProfile = (props) => {
    return (
        <div className={styles.infoProfile}>
            <div>Name: {props.fullName}</div>
            <div>About me: {props.aboutMe? props.aboutMe: 'null' }</div>
            <div>For a job: {props.lookingForAJob? 'yes' : 'no'}</div>
                {Object.entries(props.contacts).map(([key, value]) => {
                    return (<div>{key}:{value? value: 'null'}</div>)})
                }
        </div>
)}


export default InfoProfile;


//name    name
//