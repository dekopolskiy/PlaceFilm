


//Презентационные должны знать только о том,что приходит в props
//выполнять наименьшее количество  функций
const AddMessageToCom = (props) => {
    let messages = props.pageDialogs.messages.map(item => <One_comment name={item.name} value={item.value} />)
    let fullMessage = () => {
            props.addFullMessage();
    }

    let chunckMessage = (e) => {
            props.updateChunckMessage(e.target.value);
    }


    return (
        <div>
            <textarea onInput={chunckMessage} value={props.temp}></textarea>
            <button onClick={fullMessage}>add Message</button>
        </div>
    )
}



export default AddMessageToCom;