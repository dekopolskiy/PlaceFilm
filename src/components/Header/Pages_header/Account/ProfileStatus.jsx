import React from "react";
import styles from './ProfileStatus.module.css'

//this.props.status
class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChangedStatus: true,
            status: '', //null т.к. запускается один раз, 1-ый инициализионный
        }
    }

    changeStatusLocal() {// setState({}) асинхронная функция 
        //меняет local state дает понять React заново перерендерить компоненту
        this.setState({
            isChangedStatus: false,
            status: this.props.status //по клику поменяй local state
        })
    }

    changeStatusInServer() {
        this.setState({
            isChangedStatus: true
        })
        this.props.set_profile_status_thunk(this.state.status)
    }

    insertLetter(value) {
        this.setState({
            status: value
        })
    }

    render() {
        return (
            <div>
                {this.state.isChangedStatus ?
                    <span className={styles.span} onClick={this.changeStatusLocal.bind(this)}>{this.props.status? this.props.status: 'NOT STATUs'}</span> :
                    <input type='text' onChange={(e) => this.insertLetter(e.target.value)}
                        onBlur={this.changeStatusInServer.bind(this)} value={this.state.status} />
                }
            </div>
        )
    }
}


export default ProfileStatus;


//