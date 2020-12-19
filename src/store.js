let store = {
    _state: {
        mainFilm: { name: 'True Detective', img: "https://lostfilm.info/images/poster/545/5445957.jpg" },
        picsImg: [
            { name: 'Game of Thrones', img: 'https://cs8.pikabu.ru/post_img/2016/02/26/5/1456467431143385925.jpg' },
            { name: 'Hannibal', img: 'https://i.pinimg.com/originals/a2/bb/1b/a2bb1baf7980f787120cb732176e2e57.png' },
            { name: 'Breaking bad', img: 'https://images.squarespace-cdn.com/content/v1/577a9a5d2994caf1d490b6d7/1467662434375-CJBJSTJBHVQQUGX5M19F/ke17ZwdGBToddI8pDm48kPUydNpPEEVQ0QwG_cw4xVYUqsxRUqqbr1mOJYKfIPR7PCykALxo9pVzSskFJymslaqkrZQ3HsM7nDxEV3aAe40ic-L2IOPH3Dwrhl-Ne3Z2VGrm3F1FIpxtt7KAkURBg9ZUJ_bBG6xbWP9xX6NBbc4_twk1mUNduAk0T15_nZ7z/BB_poster.jpg?format=1500w' },
            { name: 'Sons of Anarchy', img: 'https://st.kp.yandex.net/im/poster/1/3/3/kinopoisk.ru-Sons-of-Anarchy-1335951.jpg' },
            { name: 'Vikings', img: 'https://st.kp.yandex.net/im/poster/3/4/2/kinopoisk.ru-Vikings-3427081.jpg' }
        ],
        jsonMessages: [
            { name: 'first', value: 'Hi all!!!' },
            { name: 'second', value: 'How are you?' },
            { name: 'third', value: 'What kind of ...?' },
        ],
        jsonUser: [
            { id: 1, nameUser: 'Ivan' },
            { id: 2, nameUser: 'Aleksey' },
            { id: 3, nameUser: 'Fedor' },
            { id: 4, nameUser: 'Dmitry' },
            { id: 5, nameUser: 'Smerdyakov' }
        ],
        temp: '',
    },
    getState() {
        return this._state;
    },

    rerenderApp() { },
    createCallback(renderApp) {
        this.rerenderApp = renderApp;
    },

    /*___________ADD SOMETHING____________*/
    addUser(key, value) {
        this._state.jsonUser.push({ id: key, nameUser: value });
        this.rerenderApp();
    },
    addSerialPost(key, value) {
        this._state.picsImg.push({
            name: key,
            img: value,
        });
        this.rerenderApp();
    },

    /*____________DiSPATCH_______________*/
    dispatch(action) {
        if (action.type === 'ADD-USER') {
            this._state.jsonUser.push({
                id: action.key,
                nameUser: action.value
            });
            this.rerenderApp();
        } else if (action.type === 'ADD-SERIAL-POST') {
            debugger;
            this._state.picsImg.push({
                name: action.key,
                img: action.value,
            });
            this.rerenderApp();
        } else if (action.type === 'RERENDER-APP') {
            this.rerenderApp();
        }
    }
}


export default store;