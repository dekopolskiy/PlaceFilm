import { NavLink } from 'react-router-dom'
import styles from './All_films.module.css'


const All_films = (props) => {
    //Load users from Server
    if (props.all_films.length == 0) {
        props.setFilms({
            all_films: [
                { id: 1, name: 'Upon on the Hollywood', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 28 },
                { id: 2, name: 'Upon on the Holl', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 38 },
                { id: 3, name: 'Upon on the Holly', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 48 },
                { id: 4, name: 'Upon on the Hollyw', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 28 },
                { id: 5, name: 'Upon on the wood', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 38 },
                { id: 6, name: 'Upon on the od', avatarUrl: 'https://m.media-amazon.com/images/I/71jqpSg9M7L._AC_SY741_.jpg', cart: false, age: 48 },
            ],
        }, 0)
    }
    return (
        <div className={styles.allFilms}>
            <div>{props.cart}</div>
            {props.all_films.map((item) => {
                return (
                    <NavLink to={'/all_films/' + item.id}>
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
                    </NavLink>
                )
            })}
            </div>
    )
}



export default All_films;