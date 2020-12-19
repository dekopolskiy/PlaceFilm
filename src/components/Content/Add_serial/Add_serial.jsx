import styles from "./Add_serial.module.css";
import React from 'react';



let rRef = React.createRef();

const Add_serial = (props) => {

    let addSerialPost = () => {
        let text = props.state.temp;
        props.dispatch({ type: 'ADD-SERIAL-POST', key: 'Sherlock', value: text });
    }

    let observe = () => {
        props.state.temp = rRef.current.value;
        props.dispatch({ type: 'RERENDER-APP' });
    }

    return (
        <div className={styles.add}>
            <span>add serial link</span><br />
            <input type="text" ref={rRef} onChange={observe} value={props.state.temp} />
            <button onClick={addSerialPost}>serial</button>
        </div>
    )
}



export default Add_serial;