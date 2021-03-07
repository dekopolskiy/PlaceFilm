import React from "react";


class ProfileStatus extends React.Component {
    state = {
        isChangedStatus: true,
        start: this.props.status,
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
        setLocale({
            start: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.isChangedStatus ?
                    <span onClick={this.changeStatus.bind(this)} value={this.props.status}>hello world</span> :
                    <input type='text' onBlur={this.statusToStart.bind(this)} onChange={this.insertLetter} value={this.state.start}/>
                }
            </div>
        )
    }
}


export default ProfileStatus;