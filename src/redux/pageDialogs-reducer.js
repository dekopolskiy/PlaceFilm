import { act } from "react-dom/cjs/react-dom-test-utils.development";

const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


//store.getState().pageDialogs.messages

let initial = {
    messages: [
        { name: 'first', value: 'Hi all!!!' },
        { name: 'second', value: 'How are you?' },
        { name: 'third', value: 'What kind of ...?' },
    ],
    newMessageBody: '',
    users: [
        { id: 1, nameUser: 'Ivan' },
        { id: 2, nameUser: 'Aleksey' },
        { id: 3, nameUser: 'Fedor' },
        { id: 4, nameUser: 'Dmitry' },
        { id: 5, nameUser: 'Smerdyakov' }
    ],
    newUserBody: 'dmitri',
}
//initial why? redux запускает reducers без нашего ведома первый раз автоматом
//и на этой стадии необходимо дать начальные значения странице
const dialogs_reducer = (state = initial, action) => {//initial это pageDialogs
    if (action.type === ADD_USER) { 
        return { //копия объекта, immutable, pure function
            ...state,
            users: [...state.users, {id:action.key, nameUser: action.value}],
            newUserBody: '',
        };
    } else if (action.type === ADD_MESSAGE) { 
        state.messages.push({
            name: action.name,
            value: action.value,
        })
        state.newMessageBody = '';
    } else if (action.type === UPDATE_USER) {
        return {
            ...state,
            newUserBody: action.value
        };
    } else if (action.type === UPDATE_MESSAGE) {
        state.newMessageBody = action.value;
    }
    return state;
}



export default dialogs_reducer;