import axios from "axios";
import styles from './Actors.module.css'
import { act } from "react-dom/test-utils";




const Actors = (props) => {
    if (props.items.length == 0) {
        axios('https://social-network.samuraijs.com/api/1.0/users/')
            .then(response => {
                console.log(response.data.items)
                props.setActors(response.data);// {items:[]}
            }) 
    }


    let actors = props.items.map(i => {
        return (
            <div className={styles.every}>
                {i.name}
            </div>
        )
    })

    return (
        <div className={styles.main}>
            {actors}
        </div>
    )
}



export default Actors;