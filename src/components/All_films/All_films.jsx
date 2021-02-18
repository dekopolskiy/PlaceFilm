import styles from './All_films.module.css'


const All_films = (props) => {
    let all = props.all_films.map((item) => {
        return (
            <div className={styles.blockFilm}>
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
        <div className={styles.allFilms}>
            {all}
        </div>
    )
}



export default All_films;