import { connect } from "react-redux";
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


const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountAPIContainer);

export default AccountContainer;