import { Field, reduxForm } from 'redux-form'
import Block_film from './Block_film/Block_film'
import styles from './Content.module.css'
import Greetings from './Greetings/Greetings'
import Main_film from './Main_film/Main_film'

{/* массив может быть из компонент, соответсвенно может быть обработан как массив 
    соответсвенно в массив компонент можно преобразовать простой массив
*/}
const ContentFormAddPost = (props) => {
    return (
        <form className={styles.add} onSubmit={props.handleSubmit}>
            <Field component='input' name='key' type='text' />
            <button type='submit'>ADD SERIAL</button>
        </form>
    )
}
//Form убирает надобность обрабатывать каждый символ

const Content = (props) => {

    let mapPics = props.listSerials.map((item) => {
        return <Block_film name={item.name} pics={item.img} />
    });

    function processPost(e) {
        props.addOneSerial('sherlock', e.key)
    }
    return (
        <div className={styles.content}>
            <Main_film film={props.mainPoster} />
            <Greetings />
            <div className={styles.listSerials}>
                {mapPics}
            </div>
            <ContainerFormContent onSubmit={processPost} />
        </div>
    )
}


let ContainerFormContent = reduxForm({ form: 'contentFormAddPost' })(ContentFormAddPost)

export default Content;


//изменение символа
//1. Сначала он меняется в store, затем отображение в UI, принцип REACT REDUX UI BLL
//2. Значение изначально задаем из store
//3. После нажатия клавиши событие onChange, запускает функцию updatePost
//4. Чтобы высвободить компоненту от грязной работу, вызываем функцию колбэк полученную через props
//Лишаем функцию возможности обращаться к state,dispatch
//5. Вызывая колбэк функция переходит к dispatch(action)
//6. dispatch принадлежит store, соответсвенно, dispatch(action) { запускает reducers, меняет state, и отрисовка заново}