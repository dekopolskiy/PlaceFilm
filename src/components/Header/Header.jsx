import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'


const Header = () => {

    return (
        <header>
            <div class={styles.comments}>
                <NavLink to='/comments' activeClassName={styles.selected}>Messages</NavLink>
            </div>
            <div class={styles.log_in}>
                <NavLink to='/log_in' activeClassName={styles.selected}>Log in</NavLink>
            </div>
            <div class={styles.log_out}>
                <NavLink to='/log_out' activeClassName={styles.selected}>Log out</NavLink></div>
            <div class={styles.account}><NavLink to='/account' activeClassName={styles.selected}>Account</NavLink></div>
        </header>
    )
}

export default Header;