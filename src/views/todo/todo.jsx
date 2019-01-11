import React, { Component } from 'react';
import Card from '../../components/card/card.component';

import './todo.scss';

export default class Todo extends Component {
    render() {
        return (
            <div className='ui-s600' style={{ marginTop: '32px' }}>
                <Card className='tools-card'>
                    <div className='ui-card-title title-container'>
                        <span>Lista de tarefas</span>

                        <div>
                            <i className='material-icons'>filter_list</i>
                        </div>
                    </div>
                    
                    <div className='ui-card-content filter-container'>
                        <span>batata</span>
                    </div>
                </Card>
            </div>
        )
    }
}