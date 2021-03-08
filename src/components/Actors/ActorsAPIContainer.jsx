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
                idInFollowProgress={this.props.idInFollowProgress}
                followUser={this.followUser.bind(this)} //отрыв метода у объекта,  функция сама по себе 
                unfollowUser={this.unfollowUser.bind(this)} //отрыв метода у объекта , функция сама по себе
                preloader={this.props.preloader}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                items={this.props.items}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                showNewPageUsers={this.showNewPageUsers.bind(this)} //отрыв метода у объекта, функция сама по себе
            />
        )
    }

    showNewPageUsers(page) {
        this.props.getUsersThunkPage(page);
    }

    componentDidMount() {//объект создали, отрендерили, добавили в dom дерево, это Mount
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
        console.log('DidMount')
    }
    componentDidUpdate(){
        console.log('DidUpdate')
    }
    followUser(id) {
        this.props.follow(id)
    }

    unfollowUser(id) {
        this.props.unfollow(id);
    }
}



export default ActorsAPIContainer;

//Классовые компоненты имеют более широкий функционал чем функциональные
//объект создается один раз и потом с ним ведется взаимодействие в отличие
//от целой функциональной компоненты
//объект создали в Container, записали в this.props все что возвращают map`ы