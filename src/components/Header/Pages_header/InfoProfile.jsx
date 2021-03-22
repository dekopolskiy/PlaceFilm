import React from 'react'


const InfoProfile = (props) => {
    return (
        <div>
            <div>Name: {props.fullName}</div>
            <div>About me: {props.aboutMe? props.aboutMe: 'null' }</div>
            <div>For a job: {props.lookingForAJob? props.lookingForAJob : 'null'}</div>
            <div>Contacts
                {Object.entries(props.contacts).map(([key, value]) => {
                    return (<div>{key}:{value? value: 'null'}</div>)})
                }
            </div>
        </div>
)}


export default InfoProfile;