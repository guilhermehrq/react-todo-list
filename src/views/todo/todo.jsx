import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import { FAB } from '../../components/button/button.component';
import TaskComponent from './task/task.component';
import ModalComponent from '../../components/modal/modal.component';
import TextFieldComponent from '../../components/text-field/text-field.component';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            height: 0,
            openActionsItem: false,
            tasks: this.getTasks(),
            categories: this.getCategories()
        }

        this.openFilter = this.openFilter.bind(this);
        this.showOverlayActions = this.showOverlayActions.bind(this);
    }

    openFilter() {
        const state = this.state;
        this.setState({ ...state, openFilter: !state.openFilter, height: state.height === 0 ? 'auto' : 0 });
    }

    showOverlayActions(i) {
        const tasksList = this.state.tasks;

        tasksList[i].openActions = !tasksList[i].openActions;

        this.setState({ ...this.state, tasks: tasksList });
    }

    getTasks() {
        return [
            {
                id: 1,
                categoryName: 'Pessoal',
                categoryColor: 'red',
                title: 'Fazer almoco',
                description: 'Batata frita com sorvete de morango',
                date: '2019-01-23',
                openActions: false
            },
            {
                id: 2,
                categoryName: 'Teste',
                categoryColor: 'black',
                title: 'Alguma coisa qualquer',
                description: 'Testando o teste dos testadores',
                date: '2019-01-24',
                openActions: false
            }
        ]
    }

    getCategories() {
        return [
            {
                id: 1,
                name: 'Pessoal',
                color: 'red'
            },
            {
                id: 2,
                name: 'Teste',
                color: 'black'
            }
        ]
    }

    render() {
        const renderFilter = () => {
            if (this.state.openFilter) {
                return (
                    <div className='ui-card-content'>
                        Filtros aqui
                    </div>
                );
            }
        }

        return (
            <div>
                <div className='ui-s600' style={{ marginTop: '32px' }}>
                    <Card>
                        <div className='ui-card-title title-container'>
                            <span>Lista de tarefas</span>
                            <FAB type='mini' icon='filter_list' className='not-raised' onClick={() => this.openFilter()} />
                        </div>
                        <AnimateHeight
                            duration={300}
                            height={this.state.height}>
                            <ReactCSSTransitionGroup
                                transitionName='filter'
                                transitionEnterTimeout={280}
                                transitionLeaveTimeout={280}>
                                { renderFilter() }
                            </ReactCSSTransitionGroup>
                        </AnimateHeight>
                    </Card>
                    <TaskComponent showOverlayActions={ this.showOverlayActions } tasksList={ this.state.tasks }/>

                    <div className='fab-container'>
                        <FAB icon='add' backgroundColor='#64FFDA' />
                    </div>

                </div>

                <ModalComponent open={true} size={600}>
                    <div className='ui-card-title'>
                        <span>Cadastro de tarefa</span>
                    </div>
                    <div className='ui-card-content'>
                        <TextFieldComponent />
                    </div>
                </ModalComponent>
            </div>
        )
    }
}