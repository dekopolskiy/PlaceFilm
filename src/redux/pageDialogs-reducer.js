const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';


let initial = {
        messages: [
            { name: 'first', value: 'Hi all!!!' },
            { name: 'second', value: 'How are you?' },
            { name: 'third', value: 'What kind of ...?' },
        ],
        newMessageBody:'',
        users: [
            { id: 1, nameUser: 'Ivan' },
            { id: 2, nameUser: 'Aleksey' },
            { id: 3, nameUser: 'Fedor' },
            { id: 4, nameUser: 'Dmitry' },
            { id: 5, nameUser: 'Smerdyakov' }
        ],
        newUserBody:'',
}
//initial why? redux запускает reducers без нашего ведома первый раз автоматом
//и на этой стадии необходимо дать начальные значения странице
const dialogs_reducer = (state = initial, action) => {
    if (action.type === ADD_USER) { //выполняется логика добавления в state и отрисовка заново
        state.users.push({
            id: action.key,
            nameUser: action.value
        });
        state.newUserBody = '';
    } else if (action.type === ADD_MESSAGE) { //выполняется логика добавления в state и отрисовка заново
        state.messages.push({
            name: action.name,
            value: action.value,
        })
        state.newMessageBody = '';
    }
    return state;
}



export default dialogs_reducer;