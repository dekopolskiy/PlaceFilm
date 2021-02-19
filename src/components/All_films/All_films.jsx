import axios from 'axios'
import styles from './All_films.module.css'


const All_films = (props) => {

    //Load users from Server
    if (props.all_films.length == 0) {
        axios('https://social-network.samuraijs.com/api/1.0/users/')
        .then((response) => console.log(response.data.items))
        props.setFilms({
            all_films: [
                { id: 1, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 28 },
                { id: 2, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 38 },
                { id: 3, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 48 },
                { id: 4, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 28 },
                { id: 5, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 38 },
                { id: 6, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 48 },
            ]
        })
    }
    return (
        <div className={styles.allFilms}>
            <div className={styles.allFilmsContent}>
            {props.all_films.map((item) => {
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
            })}
            </div>
        </div>
    )
}



export default All_films;