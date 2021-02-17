import { connect } from "react-redux";
import AllUsers from "./AllUsers";

let mapStateToProps = state => {
    return {
        allUsers: state.pageUsers.allUsers,//отрисовка заново если меняется ссылка
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => {
            dispatch({ type: 'ADD-TO-CART', id: id })
        },
        removeFromCart: (id) => {
            dispatch({ type: 'REMOVE-FROM-CART', id: id })
        }
    }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;