import React, { Component } from 'react';

import './text-field.component.scss';

export default class TextFieldComponent extends Component {
    constructor(props){
        super(props);
        this.verifyProps = this.verifyProps.bind(this);
        this.verifyProps();
    }

    verifyProps() {
        const { select, model, name, onChange, options, textArea, optionLabel, value } = this.props;
        console.log({ select, model, name, onChange, options, textArea, optionLabel, value });
        if(!select && (model === undefined || !name || !onChange)) {
            throw new Error('Propriedades inválidas para o component TextField! As propriedades aceitas são: model, name, onChange, [label, type]');
        } else if(select && (model === undefined || !name || !onChange || !options || !optionLabel || !value)) {
            throw new Error('Propriedades inválidas para o component Select! As propriedades aceitas são: model, name, onChange, options, optionLabel, value, [label]');
        }
    }

    renderCorrectInput() {
        const { select, textArea } = this.props;
        if(!select && !textArea) {
            return (
                <div className='text-field-wrap'>
                    <input 
                        type="text" 
                        className={`md-input${this.props.model ? ' elevate' : ''}`} 
                        name={ this.props.name } 
                        value={ this.props.model } 
                        type={ this.props.type }
                        onChange={ e => this.props.onChange(e.target.value, this.props.name) }/>
                    <label>{ this.props.label }</label>
                </div>
            )
        } else if(select && !textArea) {
            const options = this.props.options.map((item, index) => {
                return <option value={ item[ this.props.value ] } key={ index }>{ item[this.props.optionLabel] }</option>
            })
            return (
                <div className='text-field-wrap'>
                    <select
                        className={`md-input${this.props.model ? ' elevate' : ''}`} 
                        name={ this.props.name } 
                        value={ this.props.model } 
                        onChange={ e => this.props.onChange(e.target.value, this.props.name) }>
                        { options }
                    </select>
                    <label>{ this.props.label }</label>
                </div>
            )
        }
    }

    render() {
        return this.renderCorrectInput();
    }
}