import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import { FAB } from '../../components/button/button.component';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            height: 0
        }
        this.openFilter = this.openFilter.bind(this);
    }

    openFilter() {
        const state = this.state;
        this.setState({ ...state, openFilter: !state.openFilter, height: state.height === 0 ? 'auto' : 0 });
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
            <div className='ui-s600' style={{ marginTop: '32px' }}>
                <Card>
                    <div className='ui-card-title title-container'>
                        <span>Lista de tarefas</span>
                        <FAB type='mini' icon='filter_list' className='not-raised' onClick={ () => this.openFilter() } />
                    </div>
                        <AnimateHeight 
                            duration={ 300 }
                            height={ this.state.height }>
                            <ReactCSSTransitionGroup
                                transitionName='filter'
                                transitionEnterTimeout={ 280 }
                                transitionLeaveTimeout={ 280 }>
                                { renderFilter() }
                            </ReactCSSTransitionGroup>
                        </AnimateHeight>
                </Card>
                <div className='fab-container'>
                    <FAB icon='add' backgroundColor='#64FFDA'/>
                </div>


                <div className='category-container'>
                    <Card>
                        <span className='category-color' style={{backgroundColor: 'red'}}></span>
                        <div className='ui-card-content'>
                            <span className='category-name' style={{color: 'red'}}>Giló</span>
                        </div>
                    </Card>

                    <Card>
                        <span className='category-color'></span>
                        <div className='ui-card-content'>
                            <span className='category-name'>Batata</span>
                        </div>
                    </Card>
                </div>
                
            </div>

           
        )
    }
}