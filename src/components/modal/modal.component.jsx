import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from '../card/card.component';

import './modal.component.scss';

export class ModalComponent extends Component {

    constructor(props) {
        super(props);
        this.showOverlay = this.showOverlay.bind(this);
    }

    showOverlay() {
        if(this.props.open) {
            return (
                <div className='overlay'>
                    <Card size={ this.props.size }>
                        <div className='ui-card-title'>
                            <span>Cadastro de tarefa</span>
                        </div>
                        <div className='ui-card-content'>
                            <p>teste</p>
                        </div>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName='overlay'
                    transitionEnterTimeout={ 280 }
                    transitionLeaveTimeout={ 280 }>
                    { this.showOverlay() }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ModalComponent;