import styles from './One_comment.module.css'

const One_comment = (props) => {
    return (
        <div class={ styles.comment }>
            <h3>{ props.name }</h3>
            <span>{ props.date }</span>
            { props.value }
        </div>
    )

}

export default One_comment;