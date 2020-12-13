import styles from './Block_film.module.css'

const Block_film = (props) => {
    return (
        <div className={styles.filmPost}>
            <img src={props.pics}/>
        </div>
    )
}


export default Block_film;