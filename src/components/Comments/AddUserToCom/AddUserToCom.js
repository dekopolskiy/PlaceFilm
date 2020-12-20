import { actionAddUser, actionRedrawingApp } from "../../../store";




const AddUserToCom = (props) => {

    /*___________USER ADD_________*/
    let addUnitOnClick = () => {
        let text = props.temp.tempUser;
        props.temp.tempUser = '';
        props.dispatch(actionAddUser(23, text));
    }

    let changeTempUser = (e) => {
        props.temp.tempUser = e.target.value;
        props.dispatch(actionRedrawingApp());
    }


    return (
        <div>
            <textarea onChange={changeTempUser} value={props.temp.tempUser}></textarea>
            <button onClick={addUnitOnClick}>add User</button>
        </div>
    )
}



export default AddUserToCom;