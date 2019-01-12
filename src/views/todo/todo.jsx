import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Hello', 'World']
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        const newItem = [...this.state.items, 'batata'];
        this.setState({ ...this.state, items: newItem });
    }

    handleRemove(i) {
        const newList = this.state.items.slice();
        newList.splice(i);
        this.setState({ ...this.state, items: newList })
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={ i } onClick={ () => this.handleRemove(i)}>
                { item }
            </div>
        ));

        return (
            <div className='ui-s600' style={{ marginTop: '32px' }}>
                <Card className='tools-card'>
                    <div className='ui-card-title title-container'>
                        <span>Lista de tarefas</span>

                        <div onClick={ () => this.handleAdd() }>
                            <i className='material-icons'>filter_list</i>
                        </div>
                    </div>
                    
                    <div className='ui-card-content filter-container'>
                        <ReactCSSTransitionGroup
                            transitionName='example'
                            transitionEnterTimeout={ 500 }
                            transitionLeaveTimeout={ 300 }>
                            { items }
                        </ReactCSSTransitionGroup>
                    </div>
                </Card>
            </div>
        )
    }
}