import React from 'react'
import styles from './Content.module.css'
import NavBar from './NavBar/NavBar';
import ActorsContainer from '../Actors/ActorsContainer'

const Content = () => {
    return (
        <div className={styles.content}>
            <NavBar />
            <div className={styles.main_film}>
                <h1>Paramount.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    molestias aspernatur ex nostrum ducimus nemo, cumque ipsam
                    incidunt voluptate, repudiandae eos commodi, beatae quibusdam
                    fugiat repellendus nobis? Inventore, facilis eveniet.
                </p>
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