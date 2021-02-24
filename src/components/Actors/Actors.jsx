import axios from "axios";
import styles from './Actors.module.css';
import React from 'react';


class Actors extends React.Component {
    constructor(props) { //как в функции конструкторе, создал объект, присвоил все из this, вернул this
        //отрабатывает один раз, методы из prototype вызываются сколько необходимо
        super(props);
    }

    render() {
        let totalCountElements = parseInt(this.props.totalCount / 100);
        let totalCountPages = Math.ceil(totalCountElements / this.props.pageSize);
        console.log(totalCountPages)
        let arr = [];
        for (let i = 1; i <= totalCountPages; i++) {
            arr.push(i);
        }

        return (
            <div>
                <div>
                    <div className={styles.main}>
                        {this.props.items.map(i => {
                            return (
                                <div className={styles.every}>
                                    <h3>{i.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.pages}>
                    {arr.map(i => {
                        return (
                            <span className={i === this.props.currentPage ? styles.activeLink : null}
                                onClick={() => {
                                    this.props.setCurrentPage(i);
                                    this.showNewPageUsers(i);
                                }}>{i}</span>
                        )
                    })}
                </div>
            </div>

        )
    }


    showNewPageUsers(page) {
        axios(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${page}`)
            .then(response => this.props.setActors(response.data))
    }

    componentDidMount() {//объект создали, отрендерили, добавили в dom дерево, это Mount
        axios(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setActors(response.data);
                this.props.setTotalCount(response.data.totalCount)
            })
    }

}



export default Actors;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в this.props все что возвращают map`ы