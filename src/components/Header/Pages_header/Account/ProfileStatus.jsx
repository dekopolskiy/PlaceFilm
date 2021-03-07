import React from "react";

//this.props.status
class ProfileStatus extends React.Component {
    state = {
        isChangedStatus: true,
        status: this.props.status,
    }

    changeStatus() {// setState({}) асинхронная функция 
        //меняет local state дает понять React заново перерендерить компоненту
        this.setState({
            isChangedStatus: false
        }) 
    }

    statusToStart() {
        this.setState({
            isChangedStatus: true
        })
        //http change status
    }

    insertLetter(e) {

    }

    render() {
        return (
            <div>
                {this.state.isChangedStatus ?
                    <span onClick={this.changeStatus.bind(this)}>{this.state.status}</span> :
                    <input type='text' onBlur={this.statusToStart.bind(this)} value={this.state.status}/>
                }
            </div>
        )
    }
}


export default ProfileStatus;