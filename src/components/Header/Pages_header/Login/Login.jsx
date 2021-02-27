


const Login = (props) => {
    return (
        <div>
            {props.isAuthorize? `HELLO ${props.email}`: 'YOU NOT AUTHORIZED'}
        </div>

    )
}


export default Login;