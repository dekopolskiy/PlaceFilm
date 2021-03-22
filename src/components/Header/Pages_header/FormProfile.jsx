import { Field, reduxForm } from "redux-form";
import CustomInput from "./CustomInput";
import { connect } from "react-redux";
import React from 'react';

class FormProfile extends React.Component {
  render() {//important: NAME синхронизируются с InitialValues, поэтому важно имена писать как в API
    return (
      <form>
      {/* Name: <Field name='fullName' type='text' component={CustomInput} /><br></br>
      AboutMe: <Field name='aboutMe' type='text' component={CustomInput} /><br></br>
      userId: <Field name='userId' type='text' component={CustomInput} /><br></br>
      LookingForAJob: <Field name='lookingForAJob' type='checkbox' component={CustomInput} /><br></br> */}
      {Object.keys(this.props.initialValues.contacts).map(key => {
                    return (<div>{key}<Field name={"contacts." + key} type='text' component={CustomInput}/></div>)
                })}
      </form>
    )
  }
};


FormProfile = reduxForm({//1
  form: 'profile_form',
  enableReinitialize: true,
})(FormProfile);

FormProfile = connect((state) => {
  return { initialValues: state.accountRDC }
}, {})(FormProfile);

export default FormProfile;


//  "contacts": {
//   "facebook": null,
//   "website": null,
//   "vk": null,
//   "twitter": null,
//   "instagram": null,
//   "youtube": null,
//   "github": null,
//   "mainLink": null




