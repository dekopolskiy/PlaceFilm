import styles from "./Actors.module.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import defaultLogo from "../../images/user1.png";
import { Paginator } from "./Paginator";

const Actors = (props) => {
  return (
    <div className={styles.wrapper_preload}>
      <div> 
      {`With photo on page :${props.itemsWithPhoto}`}
      </div>
      <div className={styles.actors}>
        <div className={styles.grid_actors}>
          {props.items.map((user) => {
            return (
              <div>
                <NavLink to={`/account/${user.id}`}>
                  <h4>{user.name}</h4>
                  <h5>{user.id}</h5>
                  <img src={user.photos.large ? user.photos.large : defaultLogo} alt="" width={70} height={70} />
                </NavLink>
                <br></br>
                {user.followed ? (
                  <button disabled={props.idInFollowProgress.some(
                    (i) => i == user.id
                  )}
                    onClick={() => {
                      props.unfollowUser(user.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    disabled={props.idInFollowProgress.some(
                      (i) => i == user.id
                    )}
                    onClick={() => {
                      props.followUser(user.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <Paginator totalCount={props.totalCount} pageSize={props.pageSize} showNewPageUsers={props.showNewPageUsers} />
      </div>
    </div>

  );
};

export default Actors;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в props все что возвращают map`ыы
