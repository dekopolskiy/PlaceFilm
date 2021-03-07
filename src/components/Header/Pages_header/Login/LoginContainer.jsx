import { connect } from "react-redux";
import Login from "./Login";
import React from 'react'
import { pass_auth } from "../../../../actionCreator";



class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props}/>
    }

    componentDidMount() {
        this.props.pass_auth()
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.loginRDC.data.id,
        login: state.loginRDC.data.login,
        email: state.loginRDC.data.email,
        isAuthorize: state.loginRDC.isAuthorize
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        pass_auth: () => dispatch(pass_auth()) 
        //Внутри path_auth, http запрос,
        //dispatch(actionCreator(что вернул http)) 
        //dispatch вызывает каждый reducer и ищет свое соответсвие по полю type
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)




