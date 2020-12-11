
import Block_film from './Content/Block_film/Block_film'
import Greetings from './Content/Greetings/Greetings'
import styles from './Section.module.css'


const Section = (props) => {
    let mapPics = props.picsImg.map(item => <Block_film name={item.name} pics={item.img} />)
    return (
        <div className={styles.section}>
            <Greetings />
            <div className={styles.postFilm}>
                {mapPics}
            </div>
        </div>
    )
}

export default Section;