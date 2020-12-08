import Fifa from '../Categories/Fifa/FIFA'
import Nba from '../Categories/Nba/NBA'
import Nhl from '../Categories/Nhl/NHL'
import Greetings from '../Categories/Greetings/Greetings'
import styles from './Section.module.css'



const Section = () => {
    return (
        <div className={styles.section}>
            <Greetings />
            <Fifa/>
            <Nba/>
            <Nhl/>
        </div>
    )
}

export default Section;