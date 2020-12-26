const ADD_SERIAL_POST = 'ADD-SERIAL-POST';

const content_reducer = (state, action) => {
    if (action.type === ADD_SERIAL_POST) { //выполняется логика добавления в state и отрисовка заново
        state.listSerials.push({
            name: action.key,
            img: action.value,
        });
        state.newPosterBody = '';
    }
    return state;
}


export default content_reducer;