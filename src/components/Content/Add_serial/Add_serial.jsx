import styles from "./Add_serial.module.css";
import React from 'react';
import { actionAddSerialPost, actionRedrawingApp } from "../../../store";




const Add_serial = (props) => {
    let addSerialPost = () => { //2
        props.dispatch(actionAddSerialPost('sherlock', props.pageContent.newPosterBody));
    }

    let changeAreaLink = (e) => { //1
        props.pageContent.newPosterBody = e.target.value;
        props.dispatch(actionRedrawingApp());
    }

    return (
        <div className={styles.add}>
            <span>add serial link</span><br />
            <input type="text" onChange={changeAreaLink} value={props.pageContent.newPosterBody} //1
            /> 
            <button onClick={addSerialPost}>serial</button> 
        </div>
    )
}



export default Add_serial;