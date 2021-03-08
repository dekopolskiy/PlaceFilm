import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get_profile_info_thunk, get_status_thunk, setAccount, set_profile_status_thunk } from "../../../../actionCreator";
import AccountAPIContainer from "./AccountAPIContainer";



const mapStateToProps = (state) => {
    return {
        account: state.accountRDC.account,
        status: state.accountRDC.status,        
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        get_profile_info_thunk: (id) => {
            dispatch(get_profile_info_thunk(id))
        },
        get_profile_status_thunk: (id) => {
            dispatch(get_status_thunk(id))
        },
        set_profile_status_thunk: (status) => {
            dispatch(set_profile_status_thunk(status))
        }        
    }
}

let withRouterURL = withRouter(AccountAPIContainer);//вызов возвращает копию компоненты, но со способностью
//парсить url, как только произойдет переход на account/ то отрисуется
//компонета Account, если account/id  то ничего не изменится
//поэтому после того как выстрлится дом дерево, можно распарсить  url, и сделать запрос
//к нужному аккаунту и отрисовать его

export default connect(mapStateToProps, mapDispatchToProps)(withRouterURL);
//(при import`e этого файла в App.js) при изменении адреса в адресной строке
//сработает вызов connect => из store подтянутся state и dispatch => соединит их с компонентой
//withRouterURL(Копия AccountAPIContainer расширенная)  
//но с функционалом распарсить url
