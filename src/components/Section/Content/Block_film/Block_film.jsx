import styles from './Block_film.module.css'

const Block_film = (props) => {
    return (
        <div className={styles.filmPost}>
            <img src={props.pics}
                width='240' height='280' />
            <p>
                {props.name}
            </p>
        </div>
    )
}


export default Block_film;