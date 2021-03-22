import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/pn.png";
import { withIsAuth } from "../../hoc/hoc";
import { connect } from "react-redux";
import { logout_samurai_thunk } from "../../actionCreator";

const Header = (props) => {
  return (
    <header>
      <div className={styles.logo}>
        <NavLink to="/content" activeClassName={styles.selected}>
          <img src={logo} width="90" />
        </NavLink>
      </div>
      <div className={styles.nav}>
        <div>
          <NavLink to="/myprofile">My Profile</NavLink>
        </div>
        <div className={styles.actors}>
          <NavLink to="/actors" activeClassName={styles.selected}>
            Actors
          </NavLink>
        </div>
        <div className={styles.all_films}>
          <NavLink to="/all_films" activeClassName={styles.selected}>
            Movies
          </NavLink>
        </div>
        {props.isAuthorize ? (
          <div className={styles.log_out} onClick={props.logout}>
            Logout
          </div>
        ) : (
          <div className={styles.log_in}>
            <NavLink to="/registration" activeClassName={styles.selected}>
              Sign in
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      return dispatch(logout_samurai_thunk());
    },
  };
};

let LogoutExtend = connect(null, mapDispatchToProps)(withIsAuth(Header));
export default LogoutExtend;
