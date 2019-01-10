import React, { Component } from 'react';
import './card.component.scss';

export class Card extends Component {
    render() {
        return (
            <div className={`ui-card size-${ this.props.size || 480 }`}>
                { this.props.children }
            </div>
        )
    }
};

export default Card;