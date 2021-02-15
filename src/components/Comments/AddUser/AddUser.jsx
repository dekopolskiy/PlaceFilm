import OneUser from "../OneUser";




const AddUser = props => {
    let users = props.users.map(item => <OneUser id={item.id} name={item.nameUser}/>)

    let addUnit = () => props.addUser(23, props.newUserBody);
    
    let changeTemp = e => props.updateUser(e.target.value);

    return (
        <div>
            {users}
            <input type='text' onChange={changeTemp} value={props.newUserBody}/>
            <button onClick={addUnit}>add User</button>
        </div>
    )
}

//сначала изменения в store потом UI, BLL => UI
//сначала данные в UI быть не может, UI только отрисовка

export default AddUser;