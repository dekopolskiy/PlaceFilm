//CustomInput({meta: {touched,error}, input: ..., type:...})
import styles from './MyProfile.module.css'

const CustomInput = ({meta, input, type}) => {
    return (
        <div>
        <input
        className={meta.touched && meta.error? styles.inputError: null} 
        {...input} type={type} 
        onChange={(e) => input.onChange(e.target.value)}>
        </input>
        {meta.touched && meta.error? <span className={styles.error}>{meta.error}</span> : null}
        </div>
    )
}


export default CustomInput;