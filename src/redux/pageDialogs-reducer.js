const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';




const dialogs_reducer = (state, action) => {
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