import React from "react";
import { Redirect } from "react-router";
import InfoProfile from "./InfoProfile";
import styles from "./MyProfile.module.css";
import FormProfile from "./FormProfile";
//Component every run after http , setProfile in state, all methods run again
export class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      value: 0,
      formDisable: true,
    };
  }
  //3.component load and load profile and set
  componentDidMount() {
    console.log("DidMout");
    if (this.props.login.isAuthorize) {
      this.props.getProfile(this.props.login.data.id);
    }
  }
  //4.not first run, prevProps: null, this.props {name: DanteAligheri}
  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate");
    if (prevProps.profile !== this.props.profile) {
      this.setState((prevState, prevProp) => {
        console.log(prevState, prevProp);
        return { load: false };
      }); //Load false
      this.setState((prevState, prevProp) => {
        console.log(prevState, prevProp);
        return { formDisable: true };
      });
    }
  }
  componentWillMount() {
    console.log('willUnmout')
  }
  
  //putProfile and again setProfile in State, againd CPDM, CMPDU
  proccesingForm(formData) {
    this.props.setProfile(formData);
  }

  render() {
    console.log('render')
    //1.Not authorize --- exit
    if (!this.props.login.isAuthorize) {
      return <Redirect to="/registration" />;
    }
    //2.not data from getPRofile and not set in state --- exit
    if (this.state.load) {
      return <div>LOading...</div>;
    }
    return (
      <div className={styles.myProfileWrap}>
        <div className={styles.wrapper}>
          <div className={styles.photo_status}>
            <div className={styles.photo}>
              <img src={this.props.profile.photos.large} />
            </div>
            {/* <div className={styles.status}>status</div> */}
          </div>
          <div className={styles.info}>
            {this.state.formDisable ? (
              <InfoProfile {...this.props.profile} />
            ) : (
              <FormProfile
                onSubmit={this.proccesingForm.bind(this)}
                initialValues={this.props.profile}
              />
            )}
          </div>
          <div
            onClick={() => this.setState({ formDisable: false })}
            className={styles.buttonDiv}
          >
            edit form
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
