import { connect } from "react-redux";
import withRedirect from "../../hoc/hoc";
import All_films from "./All_films";

let mapStateToProps = state => {
    //state приходит целиком, со всеми reducers
    return {
        all_films: state.all_filmsRDC.all_films,//отрисовка заново если меняется ссылка
        //сами выбираем, что будем видеть в этой компоненте, указывая нужный нам reducer из store.js
        cart: state.all_filmsRDC.cart,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => {
            dispatch({ type: 'ADD-TO-CART', id: id })
        },
        removeFromCart: (id) => {
            dispatch({ type: 'REMOVE-FROM-CART', id: id })
        },
        setFilms: (films, cart) => {
            dispatch({ type: 'SET-FILMS', films: films, cart: cart })
        },
    }
}

//compose()(All_films)
//Находишь то с чего начала обворачивать ----- 1.All_films, то есть для какой 
//компоненты был создан контейнер
//compose(withRedirect)(All_films) withRedirect вызовется сам с компонентой
let withRedir = withRedirect(All_films);
//compose(connect(mapState,maoDispatch),withRedirect)(All_films)
//вызовется уже с тем , что вернул предыдущий вызов
const All_filmsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedir);//06.03.21 All_films
//и вокнце вернет компоненту которую также export default
export default All_filmsContainer;

//две функции вызываются как колбэки, и вызывается withRedir как колбэк, компонента это тоже функция
//при этом вызов Content() происходит с передачей в параметр props значений из первых двух функций Content(props)
//withRedirect это hoc, принимает компоненту и возвращает её наделенную дополнительным поведением
/*create: function with(Component){
    function Wrapper(props) {
        //любое поведение
        return Component;
    }
    return Wrapper;
}
*/
