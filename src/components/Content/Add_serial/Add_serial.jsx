import styles from "./Add_serial.module.css";
import React from 'react';
import { actionAddSerialPost, actionRedrawingApp } from "../../../store";



let rRef = React.createRef();

const Add_serial = (props) => {

    let addSerialPost = () => {
        let linkToImg = props.temp.tempPosterLink;
        props.dispatch(actionAddSerialPost('sherlock', linkToImg));
    }

    let changeAreaLink = (e) => {
        props.temp.tempPosterLink = e.target.value;
        props.dispatch(actionRedrawingApp());
    }

    return (
        <div className={styles.add}>
            <span>add serial link</span><br />
            <input type="text" onChange={changeAreaLink} value={props.temp.tempPosterLink}
            placeholder='https://fast-anime.ru/shop/upload/245103.jpg'/>
            <button onClick={addSerialPost}>serial</button>
        </div>
    )
}



export default Add_serial;