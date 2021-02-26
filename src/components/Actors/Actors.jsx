import styles from './Actors.module.css';
import React from 'react';
import preloader from '../../images/preloader.gif'
import { NavLink } from 'react-router-dom';

const Actors = (props) => {

    let totalCountElements = parseInt(props.totalCount / 100);
    let totalCountPages = Math.ceil(totalCountElements / props.pageSize);

    let arr = [];
    for (let i = 1; i <= totalCountPages; i++) {
        arr.push(i);
    }

    return (
        <div>
            {props.preloader? <img src={preloader} className={styles.img} /> : null}
            <div>
                <div>
                    <div className={styles.main}>
                        {props.items.map(i => {
                            return (
                                <NavLink to={`/account/${i.id}`}>
                                <div className={styles.every}>
                                    <h3>{i.name}</h3>
                                </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.pages}>
                    {arr.map(i => {
                        return (
                            <span className={i === props.currentPage ? styles.activeLink : null}
                                onClick={() => {
                                    props.setCurrentPage(i);
                                    props.showNewPageUsers(i);
                                }}>{i}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Actors;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в props все что возвращают map`ыы