import { connect } from "react-redux";
import Actors from "./Actors";



const mapStateToProps = (state) => {
    return {
        items: state.actorsRDC.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActors: (data) => {
            dispatch({type: 'SET-ACTORS', data: data})
        }
    }
}

const ActorsContainer = connect(mapStateToProps, mapDispatchToProps)(Actors)


export default ActorsContainer;