import styles from "./Add_serial.module.css";
import React from 'react';


//PRESENTATIONAL COMPONENT
//только выводим ui, и по минимуму события

const Add_serial = (props) => {
    let addSerialPost = () => { //
        props.addOneSerial('sherlock', props.newPosterBody);
    }

    let changeAreaLink = (e) => { //1
        props.updateForDrawing(e.target.value);
    }

    return (
        <div className={styles.add}>
            <span>add serial link</span><br />
            <input type="text" onChange={changeAreaLink} value={props.newPosterBody} //1
            /> 
            <button onClick={addSerialPost}>serial</button> 
        </div>
    )
}


export default Add_serial;