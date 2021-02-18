



const initial = {
    allFilms: [
        { id: 1, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 28 },
        { id: 2, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 38 },
        { id: 3, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 48 },
        { id: 4, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 28 },
        { id: 5, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 38 },
        { id: 6, name: 'Однажды в голливуде', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg', cart: false, age: 48 },
    ]
}


const all_films_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                allFilms : state.allFilms.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item,
                            cart: true,
                        }
                    }
                    return item;
                })
            }
        case 'REMOVE-FROM-CART':
            return {
                ...state,
                allFilms : state.allFilms.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item,
                            cart: false,
                        }
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}



export default all_films_reducer;

//функция редьюсер - это чистая функция, принимающая state и action, создающая копию по принципу immutable
//и возвращая либо копию либо state если менять нечего

