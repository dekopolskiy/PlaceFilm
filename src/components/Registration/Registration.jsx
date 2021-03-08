import { Field, reduxForm } from "redux-form"
import styles from './Registration.module.css'
import React from 'react'
import { registration } from "../../DAL/axiosREST"

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>{/*e.preventDefault()
            собирает все данные из полей Field в объект
            и вызывает props.onSubmit(объект с данными полей)
            */}
                <div>
                    <Field component='input' type='email' name='login' placeholder='email' />{/*функциональный input */}
                </div>
                <div>
                    <Field component='input' type='password' name='password' placeholder='password' />
                </div>
                <div>
                    <Field component='input' type='checkbox' name='checkbox' />
                </div>
                <div>
                    <button type='submit'>LOGIN</button>
                    <button type='submit' onClick={registration.log_out_account}>LOGOUT</button>
                </div>
            </form>
        </div>
    )
}


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



const ContainerRegistrationForm = reduxForm({
    // a unique name for the form, reducer ориентируется где какая форма, так как их может быть множество
    form: 'login'
})(LoginForm)

/*reduxForm(obj) {
    methods in props
    return function(Component) {
        return Component(props)
    }
}
*/


export default Registration;