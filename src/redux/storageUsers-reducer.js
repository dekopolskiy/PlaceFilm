



const initial = {
    allUsers: [
        { id: 1, name: 'Dmitri', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 28 },
        { id: 2, name: 'Vladimir', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 38 },
        { id: 3, name: 'Mihail', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 48 },
        { id: 4, name: 'Dmitri', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 28 },
        { id: 5, name: 'Vladimir', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 38 },
        { id: 6, name: 'Mihail', avatarUrl: 'https://b1.filmpro.ru/c/377809.jpg', cart: false, age: 48 },
    ]
}


const storage_users_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                allUsers : state.allUsers.map((item) => {
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
                allUsers : state.allUsers.map((item) => {
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



export default storage_users_reducer;

//функция редьюсер - это чистая функция, принимающая state и action, создающая копию по принципу immutable
//и возвращая либо копию либо state если менять нечего

