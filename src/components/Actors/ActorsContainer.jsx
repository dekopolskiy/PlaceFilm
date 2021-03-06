import { connect } from "react-redux";
import ActorsAPIContainer from "./ActorsAPIContainer";
import { getUsersThunkPage, getUsersThunk, follow, unfollow } from "../../actionCreator"


const mapStateToProps = (state) => {
    return {
        items: state.actorsRDC.items,
        currentPage: state.actorsRDC.currentPage,
        pageSize: state.actorsRDC.pageSize,
        totalCount: state.actorsRDC.totalCount,
        preloader: state.actorsRDC.preloader,
        idInFollowProgress: state.actorsRDC.idInFollowProgress,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(follow(id)),
        unfollow: (id) => dispatch(unfollow(id)),
        getUsersThunkPage: (page) => dispatch(getUsersThunkPage(page)),
        getUsersThunk: (count, page) => dispatch(getUsersThunk(count, page)),
    }
}


const ActorsContainer = connect(mapStateToProps, mapDispatchToProps)(ActorsAPIContainer)


export default ActorsContainer;



//вместо второго параметра функции connect , mapDispatchtoProps, можно зарефакторить
// так как она возвращает объект, можно этот объект создать самому и передать как параметр
// по вызову connect сам подставит dispatch на все эти методы
// dispatch(setTotalCount), а setTotalCount возвращает объект
//connect и Provider лишают отрисовки приложения целиком, перерисовывается только часть
//connect через Context API имеет доступ к store



/*const mapDispatchToProps = (dispatch) => {
    return {
        setActors: (data) => {
            dispatch({ type: 'SET-ACTORS', data: data })
        },
        setCurrentPage: (page) => {
            dispatch({ type: 'SET-CURRENT-PAGE', page: page })
        },
        setTotalCount: (totalCount) => {
            dispatch({ type: 'SET-TOTAL-COUNT', totalCount: totalCount })
        },
        onloadPage: (param) => {
            dispatch({ type: 'SET-PRELOADER', param: param })
        }
    
    }
}
*/