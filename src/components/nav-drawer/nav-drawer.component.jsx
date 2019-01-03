import React, { Component } from 'react';
import './nav-drawer.component.scss';
import If from '../../utils/if/if.directive';

export default class NavDrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <If test={this.props.open}>
                    <div className={`overlay ${this.props.open ? 'open' : ''}`} onClick={() => this.props.handleMenuClick()}>
                    </div>
                </If>
                <div className={`nav-drawer-wrap ${this.props.open ? 'open' : ''}`}>
                    <div className='header'>
                        <div className='leading-container'>
                            <div onClick={() => this.props.handleMenuClick()}>
                                <i className='material-icons'>arrow_back</i>
                            </div>
                        </div>
                        <div className='title'>
                            {this.props.title}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}