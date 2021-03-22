import { Field, reduxForm } from "redux-form";
import CustomInput from "./CustomInput";
import { connect } from "react-redux";
import React from "react";

class FormProfile extends React.Component {
  render() {
    //important: NAME синхронизируются с InitialValues, поэтому важно имена писать как в API
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>Name: <Field name="fullName" type="text" component={CustomInput} /></div>
        <div>AboutMe: <Field name="aboutMe" type="text" component={CustomInput} /></div>
        <div>userId: <Field name="userId" type="text" component={CustomInput} /></div>
        <div>lookingForAJobDescription: <Field name="lookingForAJobDescription" type="text" component={CustomInput}/></div>
        <div>LookingForAJob:
        <Field name="lookingForAJob" type="checkbox" component={CustomInput} /></div>
        {Object.keys(this.props.initialValues.contacts).map((key) => {
          return (
            <div>
              {key}
              <Field
                name={"contacts." + key}
                type="text"
                component={CustomInput}
              />
            </div>
          );
        })}
        <button type="submit">Send</button>
      </form>
    );
  }
}

FormProfile = reduxForm({
  //1
  form: "profile_form",
  enableReinitialize: true,
})(FormProfile);

FormProfile = connect((state) => {
  return { initialValues: state.accountRDC };
}, {})(FormProfile);

export default FormProfile;
