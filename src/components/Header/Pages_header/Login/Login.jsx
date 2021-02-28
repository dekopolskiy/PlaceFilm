


const Login = (props) => {
    return (
        <div>
            {props.isAuthorize? `HELLO ${props.login}`: 'YOU NOT AUTHORIZED'}
        </div>

    )
}


export default Login;