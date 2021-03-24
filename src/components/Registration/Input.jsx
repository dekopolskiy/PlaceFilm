import { SubmissionError } from 'redux-form';
import styles from './Registration.module.css'

export const required = (data) => {
    return data? undefined : 'Required'
}



const Input = (props) => {
    const {input, meta, ...rest} = props;
    return (
        <div>
            <input {...input} type={rest.type} placeholder={rest.placeholder} className={meta.touched&&meta.error&&styles.inputColor}/>
            <br></br>
            {meta.touched&&meta.error? <span>{meta.error}</span>: null}
        </div>
    )
}


export default Input;

