import { connect } from "react-redux"
import { actionAddSerialPost, actionUpdateSerialPost } from "../../storeBegin"
import Content from "./Content"


let mapStateToProps = state => {
    return {
        listSerials: state.pageContent.listSerials,//отрисовка заново если меняется ссылка
        newPosterBody: state.pageContent.newPosterBody,//отрисовка заново если меняется значение
        mainPoster: state.pageContent.mainPoster //отрисовка заново если меняется значение
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addOneSerial: (name, value) => dispatch(actionAddSerialPost(name, value)), //dispatch запускает reducers, они обновляют state и отрисовывает UI заново
        updateForDrawing: onesymbol => dispatch(actionUpdateSerialPost(onesymbol)), //dispatch запускает reducers, и отрисовывает UI
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;



//Иногда объём работы, за выполнение которой отвечает отдельный компонент, 
//оказывается слишком большим, компонентe приходится решать слишком много задач.
// Использование паттерна Container/Component позволяет отделить логику функционирования 
//приложения от логики формирования его визуального представления. 
//(react-redux позволяет приблизить Container к state)

//1 под капотом Consumer(ContentContainer) по контексту получает значение value = store от Provider
//и ContentContainer с помощью connect вызывает функции мэпы с параметрами от store
//2 connect соединяет store, и отрисовку react, прослойка
//3 map'ы первый получает как колбэк параметр store.getState() 
//второй получает dispatch забинденный
//4 в контейнере помещается вся логика, все обращения к redux, для чистки презентационных компонент
//5 Content получает в props все то, что возвращают функции, обращаться можно по имени свойств
//props.pageContent, props.addOneSerial
//6 в Provider отдали store, здесь получаем state
//7 в props у Content получим pageContent, addOneSerial, updateForDrawing



//connect имеет свой subscribe(render приложения), который отрисует заново ui если изменится state
//после запуска connect, сравнивается значение listSerials(к примеру), если ссылка на объект(массив),не меняется, то 
//значит объект не изменился, даже если внутри него добавились значения, отрисовки не произойдет
//необходимо делать копию объекта, мы не имеем право менять сам state, только create copyState
//ссылка или значения примитива меняется и отрисовывается все заново