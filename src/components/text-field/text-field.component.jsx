import React, { Component } from 'react';

import './text-field.component.scss';

export default class TextFieldComponent extends Component {
    render() {
        return (
            <div className='text-field-wrap'>
                <input type="text" className='md-input'/>
                <label>Text</label>
            </div>
        )
    }
}