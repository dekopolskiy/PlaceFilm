
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
                    <img src='https://st.kp.yandex.net/im/poster/3/4/2/kinopoisk.ru-Vikings-3427081.jpg'/>
                </div>
                {mapPics}
            </div>
        </div>
    )
}

export default Section;