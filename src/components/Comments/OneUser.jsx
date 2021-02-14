import { NavLink } from "react-router-dom";


const OneUser = (props) => {
    return (
        <div>
            <NavLink to={'comments/' + props.id}>{props.name}</NavLink>
        </div>
    )
}




export default OneUser;