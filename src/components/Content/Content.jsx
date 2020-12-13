
import Block_film from './Content/Block_film/Block_film'
import Main_film from './Content/Main_film/Main_film'
import styles from './Content.module.css'
import Add_serial from './Content/Add_serial/Add_serial'


const Section = (props) => {
    let mapPics = props.picsImg.map(item => <Block_film name={item.name} pics={item.img} />)
    return (
        <div className={styles.content}>
            <Main_film />
            <div className={styles.postFilm}>
                {mapPics}
            </div>
            <Add_serial />
        </div>
    )
}

export default Section;