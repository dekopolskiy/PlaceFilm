import { actionAddMessage, actionRedrawingApp } from "../../../store";




const AddMessageToCom = (props) => {

    /*___________USER ADD_________*/
    let addUnitOnClick = () => {
        props.dispatch(actionAddMessage(23, props.dialogs.newMessageBody));
    }

    let changeTempMessage = (e) => {
        props.dialogs.newMessageBody = e.target.value;
        props.dispatch(actionRedrawingApp());
    }


    return (
        <div>
            <textarea onInput={changeTempMessage} value={props.dialogs.newMessageBody}></textarea>
            <button onClick={addUnitOnClick}>add Message</button>
        </div>
    )
}



export default AddMessageToCom;