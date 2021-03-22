import preloader from '../../../../images/preloader.gif'
import styles from './Account.module.css'
import defaultLogo from '../../../../images/user1.png'
import ProfileStatus from './ProfileStatus'

const Account = (props) => {

    if (!props.account) {
        return (
            <div className={styles.wrap_preloader}>
                <img src={preloader} className={styles.preloader}/>
            </div>
        )
    }
    return (
        <div className={styles.account}>
            <div className={styles.name}>
                <h2>{props.account.fullName}</h2>
                <ProfileStatus status={props.status} set_profile_status_thunk={props.set_profile_status_thunk}/>
                {Object.values(props.account.contacts).map((i) => {
                    if (!i) return null;
                    return (
                        <div>{i}</div>
                    )
                })
                }</div>
            <div className={styles.image}>
                <img src={props.account.photos.large? props.account.photos.large : defaultLogo} alt="Without IMG" width={200} height={200}/>
            </div>
            <div className={styles.aboutMe}>
                <h2>ABOUT ME</h2>
            </div>
        </div>

    )
}


export default Account;