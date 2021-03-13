import styles from './Registration.module.css'
import React from 'react'
import { registration } from "../../DAL/axiosREST"
import ContainerRegistrationForm from './LoginForm';




class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    processFields(e) {
        let {login: email, password, rememberMe=false} = e;
        registration.log_into_account(email, password, rememberMe) 
    }

    render() {
        return (
            <div class={styles.login}>
                <h1>LOGIN</h1>
                <ContainerRegistrationForm onSubmit={this.processFields.bind(this)} />{
                /*дейтсвие по умолчанию отменено, его необходимо обработать поэтому сами имеем доступ к этому методу */}
            </div>
        )
    }
}





export default Registration;