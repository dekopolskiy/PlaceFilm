



const initial = {
    all_films: []
}


const all_films_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                all_films : state.all_films.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item,
                            cart: true,
                        }
                    }
                    return item;
                }),
                cart: ++state.cart,
            }
        case 'REMOVE-FROM-CART':
            return {
                ...state,
                all_films : state.all_films.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item,
                            cart: false,
                        }
                    }
                    return item;
                }),
                cart: --state.cart,
            }
        case 'SET-FILMS':
            return {            
                ...state,//Этим возвращаем то, что поменяет state, state инкапсулирован
                all_films: [...action.films.all_films],
                cart: action.cart
            }
        default:
            return state;
    }
}



export default all_films_reducer;

//функция редьюсер - это чистая функция, принимающая state и action, создающая копию по принципу immutable
//и возвращая либо копию либо state если менять нечего
//после чего меняет this.state.часть и заново рендерит приложение

