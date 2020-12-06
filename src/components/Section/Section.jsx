import Fifa from '../Categories/Fifa/FIFA'
import Nba from '../Categories/Nba/NBA'
import Nhl from '../Categories/Nhl/NHL'
import Welcome from '../Categories/Welcome/Welcome'
import styles from './Section.module.css'



const Section = () => {
    return (
        <div className={styles.section}>
            <Welcome />
            <Fifa />
            <Nba />
            <Nhl />
        </div>
    )
}

export default Section;