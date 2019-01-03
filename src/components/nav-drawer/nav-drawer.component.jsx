import React, { Component } from 'react';
import './nav-drawer.component.scss';
import If from '../../utils/if/if.directive';

export default class NavDrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    generateMenuItens() {
        console.log(this.props.menuList);
        const menuItens = this.props.menuList.map((item, index) => {
            return (
                <a href={ item.url } className={ `item ${ item.actived ? 'actived' : ''}` } key={ index }>
                    <i className='material-icons'>{ item.icon }</i>
                    { item.name }
                </a>
            )
        });

        return menuItens;
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
                    <div className='menu-itens'>
                        { this.generateMenuItens() }
                    </div>
                </div>
            </div>
        )
    }
}