import { connect } from "react-redux";
import { actionLogin } from "../../../../redux/login_reducer";
import Login from "./Login";
import React from 'react'
import { authentification } from "../../../../DAL/axiosREST";



class LoginContainer extends React.Component {
    render() {
        console.log('login')
        return <Login {...this.props}/>
    }

    componentDidMount() {
        authentification()
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




