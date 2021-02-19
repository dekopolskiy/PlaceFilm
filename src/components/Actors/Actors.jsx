import axios from "axios";
import { act } from "react-dom/test-utils";




const Actors = (props) => {
    if (props.items.length == 0) {
        axios('https://social-network.samuraijs.com/api/1.0/users/')
            .then(response => {
                props.setActors(response.data);// {items:[]}
            }) 
    }


    let actors = props.items.map(i => {
        return (
            <div>
                {i.name}
            </div>
        )
    })

    return (
        <div>
            {actors}
        </div>
    )
}



export default Actors;