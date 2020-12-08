import { NavLink } from 'react-router-dom'
import styles from './Comments.module.css'
import One_comment from './One_comment'

const Comments = () => {
    return (
        <div>
            <div class={styles.comments}>
            <h2>Messages</h2>
                <div className={styles.users}>
                <div><NavLink to='/comments/ivan' activeClassName={styles.selected}>Ivan</NavLink></div>
                <div><NavLink to='/comments/aleksei' activeClassName={styles.selected}>Aleksei</NavLink></div>
                <div><NavLink to='/comments/fedor' activeClassName={styles.selected}>Fedor</NavLink></div>
                <div><NavLink to='/comments/dmitry' activeClassName={styles.selected}>Dmitry</NavLink></div>
                <div><NavLink to='/comments/smerdyakov' activeClassName={styles.selected}>Smerdyakov</NavLink></div>
                </div>
                <div className={styles.messages}>
                    <One_comment name='first' date='20:11 7 December 2020' value='
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate numquam voluptas iste, qui ratione distinctio 
            expedita accusantium cum ducimus, quos nostrum provident. Laudantium,
            asperiores dolore perspiciatis fuga eligendi architecto ipsum!'
                    />
                    <One_comment name='second' date='20:11 7 December 2020' value='
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate numquam voluptas iste, qui ratione distinctio 
            expedita accusantium cum ducimus, quos nostrum provident. Laudantium,
            asperiores dolore perspiciatis fuga eligendi architecto ipsum!'
                    />
                    <One_comment name='third' date='20:11 7 December 2020' value='
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate numquam voluptas iste, qui ratione distinctio 
            expedita accusantium cum ducimus, quos nostrum provident. Laudantium,
            asperiores dolore perspiciatis fuga eligendi architecto ipsum!'
                    />
                </div>
            </div>
        </div>
    )
}


export default Comments;