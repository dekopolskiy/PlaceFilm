import React from "react";
import { Redirect } from "react-router";
import styles from "./MyProfile.module.css";

export class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      value: 0,
      formDisable: false,
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
      <div className={styles.my_profile}>
        <div className={styles.wrapper}>
          <div className={styles.photo_status}>
            <div className={styles.photo}>
              <img src={this.props.profile.photos.large} />
            </div>
            <div className={styles.status}>status</div>
          </div>
          <button onClick={this.setState({formDisable: true})}>edit info</button>
          <div className={styles.info}>info
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
