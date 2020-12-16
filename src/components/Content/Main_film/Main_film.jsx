import styles from './Main_film.module.css'


const Main_film = (props) => {
    return (
        <div class={styles.main_film}>
            <img src={props.film.img}/>
        </div>
    )
}
export default Main_film;