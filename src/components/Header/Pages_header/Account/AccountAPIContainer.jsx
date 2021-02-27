
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
        let id = this.props.match.params.userId;
        axios(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        .then(response => {
            this.props.setAccount(response.data);
        })
    }
}





export default AccountAPIContainer;