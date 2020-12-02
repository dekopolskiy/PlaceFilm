import styles from './FIFA.module.css'
import logo from '../images_logo/fifa_logo.jpg'

const Fifa = () => {
    return (
        <div className={styles.fifa}>
        <img src={logo}/>
        </div>
    )
}


export default Fifa