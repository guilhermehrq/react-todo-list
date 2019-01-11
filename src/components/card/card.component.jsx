import React, { Component } from 'react';
import './card.component.scss';

export class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: this.props.size
        }
        this.sizes = [480, 600, 840, 960, 1280, 1440, 1600]

        this.verifySize = this.verifySize.bind(this);
    }

    componentDidMount() {
        this.verifySize();
    }

    verifySize() {
        const size = this.state.size;

        if(size && !this.sizes.includes(+size)) {
            console.warn('Valor de "size" inválido!');
            this.setState({ ...this.state, size: '' });
        } else if(size) {
            this.setState({ ...this.state, size: ` size-${ size }` });
        }
    }

    render() {
        return (
            <div className={`ui-card${ this.state.size || '' }`}>
                { this.props.children }
            </div>
        )
    }
};

export default Card;