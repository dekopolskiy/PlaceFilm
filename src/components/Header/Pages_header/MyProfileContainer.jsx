import { connect } from "react-redux";
import { get_profile_info_thunk } from "../../../actionCreator";
import { MyProfile } from "./MyProfile";


const mapStateToProps = (state) => {
    return { profile: state.accountRDC, login: state.loginRDC }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getProfile: (id) => { dispatch(get_profile_info_thunk(id))}
    }
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
