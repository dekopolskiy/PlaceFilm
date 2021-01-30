import styles from "./Add_serial.module.css";
import React from 'react';
import { actionAddSerialPost, actionRedrawingApp } from "../../../store";
import Add_serial from "./Add_serial";



//Иногда объём работы, за выполнение которой отвечает отдельный компонент, 
//оказывается слишком большим, компоненту приходится решать слишком много задач.
// Использование паттерна Container/Component позволяет отделить логику функционирования 
//приложения от логики формирования его визуального представления. 

const Add_serialContainer = (props) => { //контейнерная компонента
    
    let addSerial = (name, value) => { 
        props.dispatch(actionAddSerialPost(name, value));
    }

    let onChange = (onesymbol) => { 
        props.state.pageContent.newPosterBody = onesymbol;
        props.dispatch(actionRedrawingApp());
    }

    return (
        <Add_serial addOneSerial={addSerial} updateForDrawing={onChange} newPosterBody={props.state.pageContent.newPosterBody}/>
    )
}



export default Add_serialContainer;