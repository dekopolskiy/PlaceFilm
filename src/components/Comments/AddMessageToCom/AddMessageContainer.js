
//Иногда объём работы, за выполнение которой отвечает отдельный компонент, 
//оказывается слишком большим, компоненту приходится решать слишком много задач.
// Использование паттерна Container/Component позволяет отделить логику функционирования 
//приложения от логики формирования его визуального представления. 


const AddMessageContainer = (props) => {
    let addMessage = () => {
        props.dispatch(actionAddMessage(23, props.dialogs.newMessageBody));
    }

    let updateChunck  = (temp) => {
        props.dialogs.newMessageBody = temp;
        props.dispatch(actionRedrawingApp());
    }


    return (
            <AddMessageToCom addFullMessage={addMessage} updateChunckMessage={updateChunck} temp={props.dialogs.newMessageBody}/>
    )
}



export default AddMessageContainer;