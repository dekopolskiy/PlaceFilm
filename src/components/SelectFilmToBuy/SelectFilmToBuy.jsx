import styles from './SelectFilmToBuy.module.css'


const SelectFilmToBuy = (props) => {
    let all = props.allUsers.map((item) => {
        return (
            <div className={styles.blockUser}>
                <div>
                    <img src={item.avatarUrl} className={styles.img}></img>
                </div>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.cart ?
                        <button onClick={() => { props.removeFromCart(item.id) }}>remove</button> :
                        <button onClick={() => { props.addToCart(item.id) }}>add to cart</button> 
                    }
                </div>
            </div>
        )
    })
    return (
        <div className={styles.allUsers}>
            {all}
        </div>
    )
}



export default SelectFilmToBuy;