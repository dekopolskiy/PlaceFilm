import axios from "axios";
import styles from './Actors.module.css';
import React from 'react';


class Actors extends React.Component {
    constructor(props) { //как в функции конструкторе, создал объект, присвоил все из this, вернул this
        //отрабатывает один раз, методы из prototype вызываются сколько необходимо
        super(props);
    }

    render() {
        return (
            <div>
                {
                    pages.map(i => {
                        return (<span>{i}</span>)
                    }
                    )
                }
                <div className={styles.main}>
                    {this.props.items.map(i => {
                        return (
                            <div className={styles.every}>
                                {i.name}
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }

    componentDidMount() {//объект создали, отрендерили, добавили в dom дерево, это Mount
        axios('https://social-network.samuraijs.com/api/1.0/users/')
            .then(response => this.props.setActors(response.data))
    }

}



export default Actors;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в this.props все что возвращают map`ы