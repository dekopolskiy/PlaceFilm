import { Field, reduxForm } from "redux-form";
import { registration } from "../../DAL/axiosREST";
import Input from "./Input";
import styles from "./Registration.module.css";
import { required } from "./Input";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={styles.form_login}>
        {/*e.preventDefault()
            собирает все данные из полей Field в объект
            и вызывает props.onSubmit(объект с данными полей)
            */}
        <div>
          <Field
            component={Input}
            type="email"
            name="login"
            placeholder="email"
            validate={[required]}
          />
          {/*функциональный input */}
        </div>
        <div>
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="password"
            validate={[required]}
          />
        </div>
        <div>
          <Field component={Input} type="checkbox" name="checkbox" />
        </div>
        {props.captcha ? (
          <div>
            <img src={props.captcha}></img>
            <Field
            component={Input}
            type="text"
            name="captcha"
            placeholder="sybmols from image"
            validate={[required]}
          />
          </div>
        ) : null}
        <div>
          <button type="submit">LOGIN</button>
          <button type="button" onClick={registration.log_out_account}>
            LOGOUT
          </button>
          <button type="reset" onClick={props.reset}>
            RESET
          </button>
          <div className={styles.error}>{props.error}</div>
        </div>
      </form>
    </div>
  );
};

const ContainerRegistrationForm = reduxForm({
  // a unique name for the form, reducer ориентируется где какая форма, так как их может быть множество
  form: "login",
})(LoginForm);

/*reduxForm(obj) {
    methods in props
    return function(Component) {
        return Component(props)
    }
}
*/

export default ContainerRegistrationForm;
