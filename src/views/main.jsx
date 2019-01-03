import React, { Component } from 'react';
import ToolbarComponent from '../components/toolbar/toolbar.component';
import NavDrawerComponent from '../components/nav-drawer/nav-drawer.component';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: this.props.open,
            menuList: [
                { name: 'Home', icon: 'home', url: '#', actived: true },
                { name: 'Todo List', icon: 'list', url: '#' },
            ]
        }
        this.handleClickMenu = this.handleClickMenu.bind(this);
    }

    handleClickMenu() {
        const oldMenuOpen = this.state.menuOpen;
        this.setState({ ...this.state, menuOpen: !oldMenuOpen });
    }

    render() {
        return (
            <div>
                <ToolbarComponent title='TODO' handleMenuClick={ this.handleClickMenu }/>
                <NavDrawerComponent menuList={ this.state.menuList } open={ this.state.menuOpen } handleMenuClick={ this.handleClickMenu } title='TODO' />
            </div>
        )
    }
}

