import styles from './Main_film.module.css'
import logo from '../../../images/jeremy.jpg'

const Main_film = (props) => {
    return (
        <div className={styles.main_film}>
            {/* <img src={logo} height={400} className={styles.img} /> */}
            <div className={styles.wrapper_text}>
                <div className={styles.text}>
                    <h1>Paramount.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                        molestias aspernatur ex nostrum ducimus nemo, cumque ipsam
                        incidunt voluptate, repudiandae eos commodi, beatae quibusdam
                        fugiat repellendus nobis? Inventore, facilis eveniet.
            </p>
                </div>
            </div>

        </div>
    )
}
export default Main_film;