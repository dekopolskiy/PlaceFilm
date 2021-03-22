import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Redirect } from "react-router";
import styles from "./MyProfile.module.css";

export function MyProfile(props) {
  const [load, setLoad] = useState(true); //false

  useLayoutEffect(() => {
    
  }, [load])
  return (
      <div className={styles.my_profile}>
        <div className={styles.wrapper}>
          <div className={styles.photo_status}>
            <div className={styles.photo}>
              <img src={props.profile.photos.large} />
            </div>
            <div className={styles.status}>status</div>
          </div>
          <div className={styles.info}>info</div>
        </div>
      </div>
    );
}
