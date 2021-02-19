import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'


const Header_elem = (props) => {
    return (
        <div className={ props.style }>
            <NavLink to={ props.path } activeClassName={styles.selected}>{ props.name }</NavLink>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <Header_elem style={styles.logo} path='/content' name='MN'/>
            <Header_elem style={styles.comments} path='/actors' name='Actors'/>
            <Header_elem style={styles.log_in} path='/all_films' name='Movies'/>
            <Header_elem style={styles.log_out} path='/all' name='Log out'/>
            <Header_elem style={styles.account} path='/account' name='Account'/>
        </header>
    )
}

export default Header;