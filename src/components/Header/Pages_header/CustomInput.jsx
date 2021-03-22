


const CustomInput = (props) => {
    return (
        <input {...props.input} type={props.type} onChange={(e) => {
            props.input.onChange(e.target.value)
        }}></input>
    )
}


export default CustomInput;