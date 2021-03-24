import styles from './Registration.module.css'
import React from 'react'
import ContainerRegistrationForm from './LoginForm';
import { Redirect } from 'react-router';
import { withIsAuth } from '../../hoc/hoc';



class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    processFields(e) {
        this.props.login_samurai_thunk(e)
    }

    render() {
        console.log(this.props)
        return (
            <div class={styles.login}>
                <h1>LOGIN</h1>
                {this.props.isAuthorize ?
                    <Redirect to='/myprofile' /> :
                    <ContainerRegistrationForm onSubmit={this.processFields.bind(this)} captcha={this.props.captcha} />
                }
            </div>

        )
    }
}



{
    /*дейтсвие по умолчанию отменено, его необходимо обработать поэтому сами имеем доступ к этому методу */}

export default withIsAuth(Registration);
//return function(props) {return <Registration ...props/>}