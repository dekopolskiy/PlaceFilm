import { connect } from "react-redux";
import { actionLogin } from "../../../../redux/login_reducer";
import Login from "./Login";
import React from 'react'
import axios from "axios";



class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props}/>
    }

    componentDidMount() {
        axios(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => { this.props.actionLogin(response.data.data) })
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


/*const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: () => dispatch(actionLogin)
    }
}
*/
export default connect(mapStateToProps, {actionLogin})(LoginContainer)




