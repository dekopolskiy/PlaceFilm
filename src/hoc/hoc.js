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

function withRedirect(Component) { //1.withRedirect(Account) из вне
    function Wrapper(props) { //3.при вызове из вне того,что вернула 2, <Call attributes /> вызовется Wrapper(props)
        if (!props.isAuthorize) {
            return (
                <Redirect to='/registration' />
            )
        }
        return <Component {...props} /> //4.на замыкании удерживается в памяти Account,возвращается по условию
    }
    return connect(mapStateToPropsRedirect, null)(Wrapper);//2.Connect возвращает function(props) { return class <Wrapper props/>},
}

export default withRedirect;

//Аналог попроще
export const withIsAuth = (Component) => {
    return function(props) {
        let WithAuth = connect(mapStateToPropsRedirect, null)(Component)
        return <WithAuth {...props} />
    }
}

//две функции вызываются как колбэки, и вызывается withRedir как колбэк, компонента это тоже функция
//при этом вызов Content() происходит с передачей в параметр props значений из первых двух функций Content(props)
//withRedirect это hoc, принимает компоненту и возвращает её наделенную дополнительным поведением
/*create: function with(Component){
    function Wrapper(props) {
        //любое поведение
        return <Component props/>;
    }
    return Wrapper;
}
*/



