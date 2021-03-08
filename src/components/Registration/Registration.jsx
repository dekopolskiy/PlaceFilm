import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component='input' type='email' name='login' placeholder='email'/>
                </div>
                <div>
                    <Field component='input' type='password' name='password' placeholder='password' />
                </div>
                <div>
                <Field component='input' type='checkbox' name='checkbox' />
                </div>
                <div>
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
        </div>
    )
}


const Registration = () => {
    let func = (props) => {
        console.log(props)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ContainerRegistrationForm onSubmit={func} />
        </div>
    )
}


const ContainerRegistrationForm = reduxForm({
    // a unique name for the form
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