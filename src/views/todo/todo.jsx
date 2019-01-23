import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import { FAB } from '../../components/button/button.component';
import timeAgo from '../../utils/time-ago.service'
import If from '../../utils/if/if.directive';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            height: 0,
            openActionsItem: false
        }
        this.openFilter = this.openFilter.bind(this);
        this.handleMouseOverItem = this.handleMouseOverItem.bind(this);
    }

    openFilter() {
        const state = this.state;
        this.setState({ ...state, openFilter: !state.openFilter, height: state.height === 0 ? 'auto' : 0 });
    }

    handleMouseOverItem() {
        this.setState({ ...this.state, openActionsItem: !this.state.openActionsItem })
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


        const renderOverlayActions = () => {
            if (this.state.openActionsItem) {
                return (
                    <div className='overlay-actions'>
                        <FAB icon='edit' backgroundColor='transparent' color='#fff' className='not-raised' />
                        <FAB icon='done' backgroundColor='transparent' color='#fff' className='not-raised' />
                    </div>
                )
            }
        }

        return (
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
                            {renderFilter()}
                        </ReactCSSTransitionGroup>
                    </AnimateHeight>
                </Card>
                <div className='fab-container'>
                    <FAB icon='add' backgroundColor='#64FFDA' />
                </div>


                <div className='category-container'>
                    <Card>
                        <div onMouseEnter={() => this.handleMouseOverItem()} onMouseLeave={() => this.handleMouseOverItem()} style={{width: '100%', display: 'flex'}}>
                            <span className='category-color' style={{ backgroundColor: 'red' }}></span>
                            <div className='ui-card-content'>
                                <div className='category-container'>
                                    <span className='category-name' style={{ color: 'red' }}>Pessoal</span>
                                </div>
                                <div className='info-task'>
                                    <p className='title'>Fazer almoço</p>
                                    <p className='description'>Batata frita com sorvete de morango</p>
                                </div>
                                <div className='date-container'>
                                    <span className='date' style={{ color: 'red' }}>{timeAgo('2019-01-23', true)}</span>
                                </div>
                            </div>
                            <ReactCSSTransitionGroup
                                transitionName='overlay'
                                transitionEnterTimeout={280}
                                transitionLeaveTimeout={280}>
                                { renderOverlayActions() }
                            </ReactCSSTransitionGroup>
                        </div>
                    </Card>

                    <Card>
                        <span className='category-color' style={{ backgroundColor: 'green' }}></span>
                        <div className='ui-card-content'>
                            <div className='category-container'>
                                <span className='category-name' style={{ color: 'green' }}>Urgente</span>
                            </div>
                            <div className='info-task'>
                                <p className='title'>Ir ao médico</p>
                                <p className='description'>Falar sobre as dores de cabeça</p>
                            </div>
                            <div className='date-container'>
                                <span className='date'>{timeAgo('2019-01-22', true)}</span>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <span className='category-color' style={{ backgroundColor: 'black' }}></span>
                        <div className='ui-card-content'>
                            <div className='category-container'>
                                <span className='category-name'>Trabalho</span>
                            </div>
                            <div className='info-task'>
                                <p className='title'>Terminar Faturamento</p>
                                <p className='description'>Pro ano passado</p>
                            </div>
                            <div className='date-container'>
                                <span className='date'>{timeAgo('2019-01-15', true)}</span>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>


        )
    }
}