import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AccountAPIContainer from "./AccountAPIContainer";



const mapStateToProps = (state) => {
    return {
        account: state.accountRDC.account,        
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setAccount: (obj) => {
            dispatch({type: 'SET-ACCOUNT', obj})
        },        
    }
}

let withRouterURL = withRouter(AccountAPIContainer);//вызов возвращает копию компоненты, но со способностью
//парсить url

export default connect(mapStateToProps, mapDispatchToProps)(withRouterURL);
//(при import`e этого файла в App.js) при изменении адреса в адресной строке
//сработает вызов connect => из store подтянутся state и dispatch => соединит их с компонентой
//withRouterURL(Копия AccountAPIContainer)  