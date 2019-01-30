import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import { FAB, Button } from '../../components/button/button.component';
import TaskComponent from './task/task.component';
import ModalComponent from '../../components/modal/modal.component';
import TextFieldComponent from '../../components/text-field/text-field.component';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            openModalTarefa: false,
            height: 0,
            openActionsItem: false,
            tasks: this.getTasks(),
            categories: this.getCategories(),
            cadastroTarefa: {
                nome: '',
                descricao: '',
                categoria: '',
                data: ''
            }
        }

        this.openFilter = this.openFilter.bind(this);
        this.showOverlayActions = this.showOverlayActions.bind(this);
        this.handleChangeCadastroTarefa = this.handleChangeCadastroTarefa.bind(this);
        this.handleClickAddButton = this.handleClickAddButton.bind(this);
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
                id: null,
                name: ''
            },
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

    handleChangeCadastroTarefa(value, property) {
        const state = this.state;
        state.cadastroTarefa[property] = value;
        this.setState({ ...state });
    }

    handleClickAddButton() {
        this.setState({ ... this.state, openModalTarefa: !this.state.openModalTarefa });
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
                        <FAB icon='add' backgroundColor='#64FFDA' onClick={ () => this.handleClickAddButton() } />
                    </div>
                </div>

                <ModalComponent open={ this.state.openModalTarefa } size={600}>
                    <div className='ui-card-title'>
                        <span>Cadastro de tarefa</span>
                    </div>
                    <div className='ui-card-content'>
                        <div className='text-field-container break-on-s600'>
                            <TextFieldComponent 
                                model={ this.state.cadastroTarefa.nome } 
                                label='Nome' 
                                name='nome' 
                                onChange={ this.handleChangeCadastroTarefa }/>

                            <TextFieldComponent 
                                model={ this.state.cadastroTarefa.data } 
                                label='Data' 
                                name='data' 
                                onChange={ this.handleChangeCadastroTarefa }
                                type='date'/> 
                        </div>
                        <div className='text-field-container break-on-s600'>
                            <TextFieldComponent 
                                    model={ this.state.cadastroTarefa.descricao } 
                                    label='Descrição'
                                    name='descricao'
                                    onChange={ this.handleChangeCadastroTarefa }/>

                            <TextFieldComponent
                                    select
                                    options={ this.state.categories }
                                    optionLabel='name'
                                    value='id' 
                                    model={ this.state.cadastroTarefa.categoria } 
                                    label='Categoria'
                                    name='categoria'
                                    onChange={ this.handleChangeCadastroTarefa }/>
                        </div>
                        <div className='button-container align-rigth'>
                            <Button label='Cancelar' backgroundColor='#fff' className='not-raised' onClick={ () => this.handleClickAddButton() }/>
                            <Button label='Confirmar' backgroundColor='#64FFDA' className='not-raised'/>
                        </div>
                    </div>
                </ModalComponent>
            </div>
        )
    }
}