import React, { Component } from 'react';
import Card from '../../components/card/card.component';

export default class Todo extends Component {
    render() {
        return (
            <Card size={ 600 }>
                <h1 className='ui-card-title'>
                    Teste
                </h1>
            </Card>
        )
    }
}