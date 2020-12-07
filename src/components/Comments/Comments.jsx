import styles from './Comments.module.css'
import One_comment from './One_comment'

const Comments = () => {
    return (
        <div class={styles.comments}>
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
    )
}


export default Comments;