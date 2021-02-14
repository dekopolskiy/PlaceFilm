import OneUser from "../OneUser";




const AddUser = props => {
    console.log('AddUser')
    //let users = props.pageDialogs.users.map(item => <OneUser id={item.id} name={item.nameUser}/>)

    //let addUnit = () => props.addUser(23, props.pageDialogs.newUserBody);
    
    let changeTemp = e => props.updateUser(e.target.value);

    return (
        <div>
            <input type='text' onChange={changeTemp} value={props.pageDialogs.newUserBody}/>
           {/* <button onClick={addUnit}>add User</button>*/}
        </div>
    )
}

//сначала изменения в store потом UI, BLL => UI
//сначала данные в UI быть не может, UI только отрисовка

export default AddUser;