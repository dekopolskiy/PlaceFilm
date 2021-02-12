
import Block_film from './Block_film/Block_film'
import Main_film from './Main_film/Main_film'
import styles from './Content.module.css'
import Add_serial from './Add_serial/Add_serial'
import Greetings from './Greetings/Greetings'
import Add_serialContainer from './Add_serial/Add_serialContainer'
import MyContext from '../../MyContext'

{/* массив может быть из компонент, соответсвенно может быть обработан как массив 
    соответсвенно в массив компонент можно преобразовать простой массив
*/}
const Content = () => {
    return (
        <MyContext.Consumer>
            { redux_store => {
                let mapPics = redux_store.getState().pageContent.listSerials.map(item => <Block_film name={item.name} pics={item.img} />);
                return (
                    <div className={styles.content}>
                        <Greetings />
                        <Main_film film={redux_store.getState().pageContent.mainPoster} />
                        <Greetings />
                        <div className={styles.listSerials}>
                            {mapPics}
                        </div>
                        <Add_serialContainer state={redux_store.getState()} dispatch={redux_store.dispatch.bind(redux_store)} />
                    </div>
                )
            }
            }
        </MyContext.Consumer>
    )
}

export default Content;