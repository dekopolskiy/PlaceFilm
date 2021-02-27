
import axios from 'axios';
import React from 'react'
import Account from './Account';



class AccountAPIContainer extends React.Component {
    
    render() {
        return (
            <Account account={this.props.account}/>
        )
    }

    componentDidMount() {
        axios(`https://social-network.samuraijs.com/api/1.0/profile/15`)
        .then(response => {
            this.props.setAccount(response.data);
        })
    }
}





export default AccountAPIContainer;