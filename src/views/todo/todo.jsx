import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import IconTextButton from '../../components/button/button.component';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Hello', 'World'],
            apper: false,
            height: 0
        }
        this.openFilter = this.openFilter.bind(this);
    }

    openFilter() {
        const state = this.state;
        this.setState({ ...state, apper: !state.apper, height: state.height === 0 ? 'auto' : 0 });
    }

    render() {
        const batata = () => {
            if (this.state.apper) {
                return (
                    <div className='ui-card-content'>
                        aajnasgfhasf <br/>
                        ajbdghaffa  <br/>
                        akjfhasgf
                    </div>
                )
            }
        }

        return (
            <div className='ui-s600' style={{ marginTop: '32px' }}>
                <Card className='tools-card'>
                    <div className='ui-card-title title-container'>
                        <span>Lista de tarefas</span>

                        <IconTextButton icon='filter_list' onClick={ () => this.openFilter() }/>
                    </div>
                        <AnimateHeight 
                            duration={ 280 }
                            height={ this.state.height }>
                            <ReactCSSTransitionGroup
                                transitionName='example'
                                transitionEnterTimeout={ 280 }
                                transitionLeaveTimeout={ 280 }>
                                { batata() }
                            </ReactCSSTransitionGroup>
                        </AnimateHeight>
                </Card>
            </div>
        )
    }
}