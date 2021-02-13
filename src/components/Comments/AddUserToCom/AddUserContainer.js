import { connect } from "react-redux";
import AddUserToCom from "./AddUserToCom";




const AddUserContainer = (props) => {
    let users = props.pageDialogs.users.map(item => <User id={item.id} name={item.nameUser} />)

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

let mapStateToProps = (state) => {
    return {
        pageDialogs : state.pageDialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => dispatch(actionAddUser(23, value)),
        changeTemp: () => dispatch()
    }
}

const AddUserContainerS = connect(mapStateToProps, mapDispatchToProps)(AddUserToCom)



export default AddUserContainer;