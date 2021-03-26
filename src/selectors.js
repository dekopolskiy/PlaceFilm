import {createSelector} from 'reselect'

export const getUsers = (state) => {
    return state.actorsRDC.items
}

export const getUsersWithPhoto = createSelector(
    [getUsers], (items) => {
        return items.reduce((prevValue, current) => {
             return prevValue+= current.photos.large? 1 : 0;
        },0)
    }
);



// В чем вопрос?
/*Если необходимо добавить какую-то логику, расчеты, калькуляцию 
Добавляем селектор(строка 3) in mstp, но mStP вызывается каждый раз при изменении state
необходимо сравнить два значения
соотвественно вызывается наша калькуляция 
*/
// В чем сила?
/*FIX
reselect
на 8  строке зависимость, если она не меняется, то калькуляция лишний раз не происходит
пока строка 3 выполнится 9 раз, строка 8 выполнится минимальное кол-во раз (1?2?3?)
*/