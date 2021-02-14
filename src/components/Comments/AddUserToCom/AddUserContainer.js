import { connect } from "react-redux";
import AddUserToCom from "./AddUserToCom";
import {actionAddUser} from "../../../storeBegin"
import { actionUpdateUser } from "../../../storeBegin";




let mapStateToProps = (state) => {
    return {
        pageDialogs : state.pageDialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (key, value) => dispatch(actionAddUser(key, value)),
        updateUser: value => dispatch(actionUpdateUser(value))
    }
}

const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserToCom);



export default AddUserContainer;


//1 container оборачивает презентационную компоненту
//2 в Comments указываем AddUserContainer, а он передаст управление в AddUser
//3 connect и map, connect получит данные от provider как consumer, и прокинет props от функций map
//4 в container необходимо выполнить грязную работу, обращение к redux, а презентационная позже вызовет просто колбэк