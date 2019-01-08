import React, { Component } from 'react';
import ToolbarComponent from '../components/toolbar/toolbar.component';
import NavDrawerComponent from '../components/nav-drawer/nav-drawer.component';
import MainRouter from '../main.routes';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: this.props.open,
            menuList: [
                { name: 'Todo List', icon: 'list', url: '/' },
                { name: 'Sobre', icon: 'info', url: '/sobre' }
            ]
        }
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleClickMenu() {
        const oldMenuOpen = this.state.menuOpen;
        this.setState({ ...this.state, menuOpen: !oldMenuOpen });
    }

    handleChangePage(index) {
        const newMenu = this.state.menuList;
        newMenu.forEach((item, i) => {
            if(i !== index) {
                item.actived = false;
            } else {
                item.actived = true;
            }
        });
        this.setState({ ...this.state, menuList: newMenu });
    }

    render() {
        return (
            <div>
                <ToolbarComponent 
                    title='TODO' 
                    handleMenuClick={ this.handleClickMenu }/>
                <NavDrawerComponent 
                    menuList={ this.state.menuList } 
                    open={ this.state.menuOpen } 
                    handleMenuClick={ this.handleClickMenu }
                    handleChangePage={ this.handleChangePage } 
                    title='TODO' />
                <MainRouter />
            </div>
        )
    }
}

