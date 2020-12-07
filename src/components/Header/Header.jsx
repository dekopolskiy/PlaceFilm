import styles from './Header.module.css'


const Header = () => {

    return (
        <header>
                <div class={styles.log_in}><a href='#'>Log in</a></div>
                <div class={styles.log_out}><a href='#'>Log out</a></div>
                <div class={styles.account}><a href='#'>Account</a></div>
        </header>
    )
}

export default Header;