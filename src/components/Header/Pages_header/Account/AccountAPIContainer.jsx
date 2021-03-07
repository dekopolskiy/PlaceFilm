
import React from 'react'
import Account from './Account';



class AccountAPIContainer extends React.Component {
    
    render() {
        return (
            <Account 
            account={this.props.account}
            status={this.props.status}
            />
        )
    }

    componentDidMount() {
        let id = this.props.match.params.userId;
        this.props.get_profile_info_thunk(id);
        this.props.get_profile_status_thunk(id);
    }
}





export default AccountAPIContainer;