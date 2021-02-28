import styles from './Actors.module.css';
import React from 'react';
import preloader from '../../images/preloader.gif'
import { NavLink } from 'react-router-dom';
import defaultLogo from '../../images/user1.png'


const Actors = (props) => {
    let totalCountElements = parseInt(props.totalCount);
    let totalCountPages = Math.ceil(totalCountElements / props.pageSize);

    let arr = [];
    for (let i = 1; i <= totalCountPages; i++) {
        arr.push(i);
    }

    return (
        <div>
            {props.preloader ? <img src={preloader} className={styles.img} /> : null}
            <div>
                <div>
                    <div className={styles.main}>
                        {props.items.map(i => {
                            return (
                                <div>
                                    <NavLink to={`/account/${i.id}`}>
                                        <div className={styles.every}>
                                            <h3>{i.name}</h3>
                                            <img src={i.photos.large ? i.photos.large : defaultLogo} alt='' width={100} height={100} />
                                        </div>
                                    </NavLink>
                                    {i.followed? //true unfollow, false follow
                                        <button onClick={() => { props.unfollowUser(i.id) }}>UNFOLLOW</button> :
                                        <button onClick={() => { props.followUser(i.id) }}>FOLLOW</button>}
                                </div>
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