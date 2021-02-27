import preloader from '../../../../images/preloader.gif'
import styles from './Account.module.css'


const Account = (props) => {

    if (!props.account) {
        return (
            <div>
                <img src={preloader} />
            </div>
        )
    }
    return (
        <div className={styles.account}>
            <div className={styles.name}><h2>{props.account.fullName}</h2>
            {Object.values(props.account.contacts).map( (i) => {
                    if(!i) return null;
                    return (
                        <div>{i}</div>
                    )
                })
                }</div>
            <div className={styles.image}>
                <img src={props.account.photos.large} alt="" />
            </div>
            <div className={styles.aboutMe}>
               <h2>ABOUT ME</h2>
            </div>
        </div>

    )
}


export default Account;