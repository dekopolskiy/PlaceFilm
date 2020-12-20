import { actionAddMessage, actionRedrawingApp } from "../../../store";




const AddUserToCom = (props) => {

    /*___________USER ADD_________*/
    let addUnitOnClick = () => {
        let text = props.temp.tempMessage;
        props.temp.tempMessage = '';
        props.dispatch(actionAddMessage(23, text));
    }

    let changeTempMessage = (e) => {
        props.temp.tempMessage = e.target.value;
        props.dispatch(actionRedrawingApp());
    }


    return (
        <div>
            <textarea onChange={changeTempMessage} value={props.temp.tempMessage}></textarea>
            <button onClick={addUnitOnClick}>add Message</button>
        </div>
    )
}



export default AddUserToCom;