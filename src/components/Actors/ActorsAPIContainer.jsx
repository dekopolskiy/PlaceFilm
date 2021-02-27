import axios from "axios";
import React from 'react';
import Actors from "./Actors";


class ActorsAPIContainer extends React.Component {
    constructor(props) { //как в функции конструкторе, создал объект, присвоил все из this, вернул this
        //отрабатывает один раз, методы из prototype вызываются сколько необходимо
        super(props);
    }
    // обернули еще одной контейнерной компонентой,чтобы в контейне воспользоваться lifecycle, 
    // и сделать ajax запрос сразу по отрисовке dom дерева , функциональная компонента такой возможности
    // не дает, приходится создавать костыли, поэтому классовый контейнер
    render() {
        return (
            <Actors
                preloader={this.props.preloader}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                items={this.props.items}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                showNewPageUsers={this.showNewPageUsers.bind(this)} //т.к. метод объекта, а без bind отрывается контекст
            />
        )
    }

    showNewPageUsers(page) {
        this.props.onloadPage(true);
        axios(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setActors(response.data);
                this.props.onloadPage(false);
            })
    }

    componentDidMount() {//объект создали, отрендерили, добавили в dom дерево, это Mount
        this.props.onloadPage(true);
        axios(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setActors(response.data);
                this.props.onloadPage(false);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
}



export default ActorsAPIContainer;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в this.props все что возвращают map`ы