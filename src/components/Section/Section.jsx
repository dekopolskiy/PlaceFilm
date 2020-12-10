
import First_blank from './Content/First_blank/First_blank'
import Greetings from './Content/Greetings/Greetings'
import Second_blank from './Content/Second_blank/Second_blank'
import Third_blank from './Content/Third_blank/Third_blank'
import styles from './Section.module.css'



const Section = () => {
    return (
        <div className={styles.section}>
            <Greetings />
            <First_blank />
            <Second_blank />
            <Third_blank />
        </div>
    )
}

export default Section;