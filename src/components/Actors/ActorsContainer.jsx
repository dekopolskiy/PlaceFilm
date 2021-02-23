import { connect } from "react-redux";
import Actors from "./Actors";



const mapStateToProps = (state) => {
    return {
        items: state.actorsRDC.items,
        pagesCount: state.actorsRDC.pagesCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActors: (data) => {
            dispatch({ type: 'SET-ACTORS', data: data })
        }
    }
}

const ActorsContainer = connect(mapStateToProps, mapDispatchToProps)(Actors)


export default ActorsContainer;


//connect и Provider лишают отрисовки приложения целиком, перерисовывается только часть
