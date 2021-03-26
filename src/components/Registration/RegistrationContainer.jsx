import { Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login_samurai_thunk } from "../../actionCreator";
import { Input, Wrapped, Form } from "./StyledRegistartion";

class RegistrationContainer extends Component {
  render() {
    if(this.props.isAuthorize) {
      return <Redirect to='content'/> 
    } 
    return (
      <Wrapped>
        <h1>LOGIN</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(event) => {
            this.props.login_samurai(event);
          }}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <button type="submit">LOGIN</button>
              </Form>
            );
          }}
        </Formik>
      </Wrapped>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorize: state.loginRDC.isAuthorize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_samurai: (data) => dispatch(login_samurai_thunk(data)),
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)