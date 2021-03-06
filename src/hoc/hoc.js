import { Redirect } from "react-router";


function withRedirect(Component) {
    function Wrapper(props) {
        if (!props.isAuthorize) {
            return (
                <Redirect to='/registration' />
            )
        }
        return <Component {...props} />
    }
    return Wrapper;
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



