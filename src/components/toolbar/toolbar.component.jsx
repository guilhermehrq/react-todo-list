import React, { Component } from 'react';
import './toolbar.component.scss';

export default class ToolbarComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='toolbar-wrap' ref={ this.toolbarElement }>
                <div className='leading-container'>
                    <div onClick={ () => this.props.handleMenuClick() }>
                        <i className='material-icons'>menu</i>
                    </div>
                </div>
                <div className='title'>
                    { this.props.title }
                </div>
            </div>
        )
    }
}