import { act } from "react-dom/test-utils";

const ADD_SERIAL_POST = 'ADD-SERIAL-POST';
const UPDATE_SERIAL_POST = 'UPDATE-SERIAL-POST'

//store.getState().pageContent.listSerials


let initial = {
    mainPoster: { name: 'True Detective', img: "https://showsnob.com/files/2015/03/pLAbBJt.png" },
    listSerials: [
        { name: 'Game of Thrones', img: 'https://cs8.pikabu.ru/post_img/2016/02/26/5/1456467431143385925.jpg' },
        { name: 'Hannibal', img: 'https://i.pinimg.com/originals/a2/bb/1b/a2bb1baf7980f787120cb732176e2e57.png' },
        { name: 'Breaking bad', img: 'https://images.squarespace-cdn.com/content/v1/577a9a5d2994caf1d490b6d7/1467662434375-CJBJSTJBHVQQUGX5M19F/ke17ZwdGBToddI8pDm48kPUydNpPEEVQ0QwG_cw4xVYUqsxRUqqbr1mOJYKfIPR7PCykALxo9pVzSskFJymslaqkrZQ3HsM7nDxEV3aAe40ic-L2IOPH3Dwrhl-Ne3Z2VGrm3F1FIpxtt7KAkURBg9ZUJ_bBG6xbWP9xX6NBbc4_twk1mUNduAk0T15_nZ7z/BB_poster.jpg?format=1500w' },
        { name: 'Sons of Anarchy', img: 'https://st.kp.yandex.net/im/poster/1/3/3/kinopoisk.ru-Sons-of-Anarchy-1335951.jpg' },
        { name: 'Vikings', img: 'https://st.kp.yandex.net/im/poster/3/4/2/kinopoisk.ru-Vikings-3427081.jpg' }
    ],
    newPosterBody: 'https://www.kinopoisk.ru/im/poster/3/3/1/kinopoisk.ru-The-Sopranos-3311800--o--.jpg',
}

//initial? redux запускает reducers без нашего ведома первый раз автоматом
//и на этой стадии необходимо дать начальные значения части state для отображения в UI
const content_reducer = (state = initial, action) => {//initial это PageContent
    switch (action.type) {
        case ADD_SERIAL_POST:
            //как с массивом, все ключ:значения копируются и получаем копию объекта, не ссылку
            // в этом случае объект ниже это pageContent, не весь state, во всем reducer только часть state
            //немного неккоректное название
            return {
                ...state, //раскукоживается, и по приориету следующие значения перетерирают первоначальные
                listSerials: [...state.listSerials, { name: action.key, img: action.value } ],
                newPosterBody : '',
            }
        case UPDATE_SERIAL_POST:
            return {
                ...state,
                newPosterBody : action.value,
            }
        default:
            return state;
    }
}


export default content_reducer;


//connect имеет свой subscribe(render приложения), который отрисует заново ui если изменится state
//после запуска connect сравнивается значение pageDialogs, если ссылка на объект(массив),не меняется, то 
//значит объект не изменился, даже если внутри него добавились значения
//необходимо делать копию объекта, мы не имеем право менять сам state, только create copyState, new {}
//объекты immutable которые, мы передаем в функцию, то есть неизменяемые