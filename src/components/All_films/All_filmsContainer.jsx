import { connect } from "react-redux";
import All_films from "./All_films";

let mapStateToProps = state => {
    //state приходит целиком, со всеми reducers
    return {
        all_films: state.all_filmsRDC.all_films,//отрисовка заново если меняется ссылка
        //сами выбираем, что будем видеть в этой компоненте, указывая нужный нам reducer из store.js
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
        setFilms: (films) => {
            dispatch({ type: 'SET-FILMS', films: films })
        },
    }
}

const All_filmsContainer = connect(mapStateToProps, mapDispatchToProps)(All_films);

export default All_filmsContainer;