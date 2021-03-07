import { connect } from "react-redux";
import { Redirect } from "react-router";


//isAuthorize, чтобы не дублировать указали здесь один раз
//и через connect передали
// итог: на вход компонента, обертка wrapper, в connect Wrapper вызывается как колбэк
//и возвращается компонетна в UI
const mapStateToPropsRedirect = (state) => {
    return {
        isAuthorize: state.loginRDC.isAuthorize,
    }
}

function withRedirect(Component) {
    function Wrapper(props) {
        if (!props.isAuthorize) {
            return (
                <Redirect to='/registration' />
            )
        }
        return <Component {...props} />
    }
    return connect(mapStateToPropsRedirect, null)(Wrapper);//Connect также возвращает Wrapper, только уже наделенный 
    //дополнительными свойствами
}

export default withRedirect;


//две функции вызываются как колбэки, и вызывается withRedir как колбэк, компонента это тоже функция
//при этом вызов Content() происходит с передачей в параметр props значений из первых двух функций Content(props)
//withRedirect это hoc, принимает компоненту и возвращает её наделенную дополнительным поведением
/*create: function with(Component){
    function Wrapper(props) {
        //любое поведение
        return Component;
    }
    return Wrapper;
}
*/



