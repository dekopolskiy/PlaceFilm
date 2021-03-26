import styles from '../Content.module.css'
import { FaGooglePlay, FaSearch, FaSpider, FaTint, FaTools } from "react-icons/fa";


const NavBar = (props) => {
    return <div className={styles.navBar}>
        <FaGooglePlay className={styles.google} />
        <FaSearch className={styles.google} />
        <FaSpider className={styles.google} />
        <FaTint className={styles.google} />
        <FaTools className={styles.google} />
        <FaGooglePlay className={styles.google} />
    </div>

}

export default NavBar;