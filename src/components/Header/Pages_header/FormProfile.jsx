import { Field, reduxForm } from "redux-form";
import CustomInput from "./CustomInput";
import React from "react";
import styles from "./MyProfile.module.css";
const required = (value) => (value ? undefined : "Required");

class FormProfile extends React.Component {
  render() {
    //important: NAME синхронизируются с InitialValues из props, поэтому важно имена писать как в API
    return (
      <form onSubmit={this.props.handleSubmit} className={this.props.error ? styles.formError : null}>
        <div className={styles.contentForm}>
          Name:
          <Field name="fullName" type="text" component={CustomInput} 
          />
          AboutMe:
          <Field name="aboutMe" type="text" component={CustomInput} validate={[required]}
          />
          userId:
          <Field name="userId" type="text" component={CustomInput} validate={[required]}
          />
          lookingForAJobDescription:
          <Field name="lookingForAJobDescription" type="text" component={CustomInput} validate={[required]}
          />
          LookingForAJob:
          <Field name="lookingForAJob"
            type="checkbox" component={CustomInput} validate={[required]}
          />
          {Object.keys(this.props.initialValues.contacts).map((key) => {
            return (
              <div>{key} <Field name={"contacts." + key} type="text" component={CustomInput}/>
              </div>
            );
          })}
          <button type="submit">Send</button>
          {this.props.error ? ( <div className={styles.error}>{this.props.error}</div>) : null}
        </div>
      </form>
    );
  }
}

FormProfile = reduxForm({
  form: "profile_form",
})(FormProfile);

export default FormProfile;
