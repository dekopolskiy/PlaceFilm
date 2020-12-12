
import Block_film from './Content/Block_film/Block_film'
import Main_film from './Content/Main_film/Main_film'
import styles from './Section.module.css'


const Section = (props) => {
    let mapPics = props.picsImg.map(item => <Block_film name={item.name} pics={item.img} />)
    return (
        <div className={styles.section}>
            <Main_film />
            <div className={styles.postFilm}>
                <div className={styles.film_selection}>
                    <img src='https://www.kinopoisk.ru/im/poster/3/3/1/kinopoisk.ru-The-Sopranos-3311800--o--.jpg'/>
                </div>
                {mapPics}
            </div>
        </div>
    )
}

export default Section;