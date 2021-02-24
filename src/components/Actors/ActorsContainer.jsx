import { connect } from "react-redux";
import Actors from "./Actors";



const mapStateToProps = (state) => {
    return {
        items: state.actorsRDC.items,
        currentPage: state.actorsRDC.currentPage,
        pageSize: state.actorsRDC.pageSize,
        totalCount: state.actorsRDC.totalCount,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActors: (data) => {
            dispatch({ type: 'SET-ACTORS', data: data })
        },
        setCurrentPage: (page) => {
            dispatch({ type: 'SET-CURRENT-PAGE', page: page })
        },
        setTotalCount: (totalCount) => {
            dispatch({ type: 'SET-TOTAL-COUNT', totalCount: totalCount })
        }
    }
}

const ActorsContainer = connect(mapStateToProps, mapDispatchToProps)(Actors)


export default ActorsContainer;


//connect и Provider лишают отрисовки приложения целиком, перерисовывается только часть
