import Block_film from './Block_film/Block_film'
import Main_film from './Main_film/Main_film'
import styles from './Content.module.css'
import Greetings from './Greetings/Greetings'
import { Redirect } from 'react-router'

{/* массив может быть из компонент, соответсвенно может быть обработан как массив 
    соответсвенно в массив компонент можно преобразовать простой массив
*/}


const Content = (props) => {

    let mapPics = props.listSerials.map((item) => {
        return <Block_film name={item.name} pics={item.img} />});    

    return (
        <div className={styles.content}>
            <Main_film film={props.mainPoster} />
            <Greetings />
            <div className={styles.listSerials}>
                {mapPics}
            </div>
            <div className={styles.add}>
                <span>add serial link</span><br />
                <input type="text" onChange={(e) => { props.updateForDrawing(e.target.value)} } value={props.newPosterBody}/>
                <button onClick={() => { props.addOneSerial('sherlock', props.newPosterBody)} }>serial</button>
            </div>
        </div>
    )
}



export default Content;


//изменение символа
//1. Сначала он меняется в store, затем отображение в UI, принцип REACT REDUX UI BLL
//2. Значение изначально задаем из store
//3. После нажатия клавиши событие onChange, запускает функцию updatePost
//4. Чтобы высвободить компоненту от грязной работу, вызываем функцию колбэк полученную через props
//Лишаем функцию возможности обращаться к state,dispatch
//5. Вызывая колбэк функция переходит к dispatch(action)
//6. dispatch принадлежит store, соответсвенно, dispatch(action) { запускает reducers, меняет state, и отрисовка заново}