import React, { Component } from 'react';

import './text-field.component.scss';

export default class TextFieldComponent extends Component {
    constructor(props){
        super(props);
        this.checkInputProperties = this.checkInputProperties.bind(this);
        this.checkInputProperties();
    }

    checkInputProperties() {
        const { select, model, name, onChange } = this.props;
        console.log({ select, model, name, onChange });
        if(!select && (model === undefined || !name || !onChange)) {
            throw new Error('Propriedades inválidas para o component TextField! As propriedades aceitas são: model, name, onChange, [select, label]');
        }
    }

    render() {
        return (
            <div className='text-field-wrap'>
                <input 
                    type="text" 
                    className={`md-input${this.props.model ? ' elevate' : ''}`} 
                    name={ this.props.name } value={ this.props.model } 
                    onChange={ e => this.props.onChange(e.target.value, this.props.name) }/>
                <label>{ this.props.label }</label>
            </div>
        )
    }
}