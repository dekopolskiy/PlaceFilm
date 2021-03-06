import { connect } from "react-redux";
import withRedirect from "../../hoc/hoc";
import All_films from "./All_films";

let mapStateToProps = state => {
    //state приходит целиком, со всеми reducers
    return {
        all_films: state.all_filmsRDC.all_films,//отрисовка заново если меняется ссылка
        //сами выбираем, что будем видеть в этой компоненте, указывая нужный нам reducer из store.js
        cart: state.all_filmsRDC.cart,
        isAuthorize: state.loginRDC.isAuthorize
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

let withRedir = withRedirect(All_films);

const All_filmsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedir);

export default All_filmsContainer;