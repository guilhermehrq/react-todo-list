import React, { Component } from 'react';
import './nav-drawer.component.scss';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavDrawerComponent extends Component {
    generateMenuItens() {
        const menuItens = this.props.menuList.map((item, index) => {
            return (
                <NavLink to={ item.url } className={`item${item.activated ? ' activated' : ''}`} key={ index } onClick={ () => this.props.handleChangePage(index) }>
                    <i className='material-icons'>{ item.icon }</i>
                    { item.name }
                </NavLink>
            );
        });

        return menuItens;
    }

    showOverlay() {
        if(this.props.open) {
            return (
                <div className={`overlay ${this.props.open ? 'open' : ''}`} onClick={() => this.props.handleMenuClick()}>
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