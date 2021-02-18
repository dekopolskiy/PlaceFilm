import { connect } from "react-redux";
import SelectFilmToBuy from "./SelectFilmToBuy";

let mapStateToProps = state => {
    //state приходит целиком, со всеми reducers
    return {
        allUsers: state.selectFilmRDC.allFilms,//отрисовка заново если меняется ссылка
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
        }
    }
}

const SelectFilmToBuyContainer = connect(mapStateToProps, mapDispatchToProps)(SelectFilmToBuy);

export default SelectFilmToBuyContainer;