import { actionAddUser, actionRedrawingApp } from "../../../store";




const AddUserToCom = (props) => {

    /*___________USER ADD_________*/
    let addUnitOnClick = () => {
        props.dispatch(actionAddUser(23, props.dialogs.newUserBody));
    }

    let changeTempUser = (e) => {
        props.dialogs.newUserBody = e.target.value;
        props.dispatch(actionRedrawingApp());
    }


    return (
        <div>
            <textarea onInput={changeTempUser} value={props.dialogs.newUserBody}></textarea>
            <button onClick={addUnitOnClick}>add User</button>
        </div>
    )
}



export default AddUserToCom;