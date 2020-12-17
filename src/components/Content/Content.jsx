
import Block_film from './Block_film/Block_film'
import Main_film from './Main_film/Main_film'
import styles from './Content.module.css'
import Add_serial from './Add_serial/Add_serial'
import Greetings from './Greetings/Greetings'

{/* массив может быть из компонент, соответсвенно может быть обработан как массив 
    соответсвенно в массив компонент можно преобразовать простой массив
*/}
const Content = (props) => {

    let mapPics = props.store.state.picsImg.map(item => <Block_film name={item.name} pics={item.img} />)
    return (
        <div className={styles.content}>
               <Greetings />
            <Main_film film={props.store.state.mainFilm}/>
            <Greetings />
            <div className={styles.listSerials}>
                {mapPics}
            </div>
            <Add_serial />
        </div>
    )
}

export default Content;