
import First_blank from './Content/First_blank/First_blank'
import Greetings from './Content/Greetings/Greetings'
import Second_blank from './Content/Second_blank/Second_blank'
import Third_blank from './Content/Third_blank/Third_blank'
import styles from './Section.module.css'


let picsImg= [ 
    {name: 'Joker', img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900'},
    {name: 'Pulp Fiction', img: 'https://m.anwap.bio/films/screen/4068.jpg'},
    {name: 'Whiplash', img: 'https://static.my-shop.ru/product/3/273/2720666.jpg'},
    {name: 'Knives out', img:'https://upload.wikimedia.org/wikipedia/ru/8/83/Knives_Out_%28film%29.jpg'}
]


const Section = () => {
    return (
        <div className={styles.section}>
            <Greetings />
            <First_blank />
            <Second_blank />
            <Third_blank />
        </div>
    )
}

export default Section;