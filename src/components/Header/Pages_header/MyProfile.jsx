import React from "react";
import { Redirect } from "react-router";
import InfoProfile from "./InfoProfile";
import styles from "./MyProfile.module.css";
import FormProfile from "./FormProfile"

export class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      value: 0,
      formDisable: true,
    };
  }

  componentDidMount() {
    if (this.props.login.isAuthorize) {
      this.props.getProfile(this.props.login.data.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({ load: false });
    }
  }

  render() {
    if (this.state.load) {
      return <div>LOading...</div>;
    }
    if (!this.props.login.isAuthorize) {
      return <Redirect to="/registration" />;
    }
    return (
      <div className={styles.myProfileWrap}>
        <div className={styles.wrapper}>
          <div className={styles.photo_status}>
            <div className={styles.photo}>
              <img src={this.props.profile.photos.large} />
            </div>
            <div className={styles.status}>status</div>
            <button onClick={() => this.setState({formDisable: false})}>editChange</button>
            <button onClick={() => this.setState({formDisable: true})}>send</button>
          </div>
          <div className={styles.info}>
            {this.state.formDisable ? <InfoProfile {...this.props.profile}/> : <FormProfile />} 
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
