import Fifa from '../Categories/Fifa/FIFA'
import Nba from '../Categories/Nba/NBA'
import Nhl from '../Categories/Nhl/NHL'
import Ufc from '../Categories/Ufc/UFC'
import styles from './Section.module.css'



const Section = () => {
    return (
        <div className={styles.section}>
            <Fifa />
            <Nba />
            <Nhl />
            <Ufc />
        </div>
    )
}

export default Section;