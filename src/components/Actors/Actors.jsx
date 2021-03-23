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
            <div className={styles.wrapper_preload}>
            {props.preloader ? <img src={preloader} className={styles.image} /> : null}
            <div className={styles.actors}>
                <div className={styles.grid_actors}>
                    {props.items.map(user => {
                        return (
                            <div>
                                <NavLink to={`/account/${user.id}`}>
                                    <h4>{user.name}</h4>
                                    <h5>{user.id}</h5>
                                    <img src={user.photos.large ? user.photos.large : defaultLogo} alt='' width={70} height={70} />
                                </NavLink>
                                <br></br>
                                {user.followed ?
                                    <button disabled={props.idInFollowProgress.some(i => i == user.id)} onClick={() => { props.unfollowUser(user.id); }}>UNFOLLOW</button> :
                                    <button disabled={props.idInFollowProgress.some(i => i == user.id)} onClick={() => { props.followUser(user.id) }}>FOLLOW</button>
                                }
                            </div>
                        )
                    })}
                </div>
                <div className={styles.pages}>
                    {arr.map(page => {
                        return (
                            <div className={page === props.currentPage ? styles.activeLink : null}
                                onClick={() => {
                                    props.showNewPageUsers(page);
                                }}>{page}</div>
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