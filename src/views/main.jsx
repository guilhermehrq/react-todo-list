import React, { Component } from 'react';
import ToolbarComponent from '../components/toolbar/toolbar.component';
import NavDrawerComponent from '../components/nav-drawer/nav-drawer.component';
import Routes from './routes';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: this.props.open,
            menuList: [
                { name: 'Todo List', icon: 'list', url: '/', activated: true },
                { name: 'Sobre', icon: 'info', url: '/sobre' }
            ]
        }

        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.verifyActualPage = this.verifyActualPage.bind(this);
    }

    componentWillMount() {
        this.verifyActualPage();
    }

    handleClickMenu() {
        const oldMenuOpen = this.state.menuOpen;
        this.setState({ ...this.state, menuOpen: !oldMenuOpen });
    }

    verifyActualPage() {
        const actualLocation = window.location.pathname;

        this.state.menuList.forEach((item, i) => {
            if(item.url === actualLocation) {
                this.handleChangePage(i);
            }
        })
    }

    handleChangePage(index) {
        const newMenu = this.state.menuList;
        newMenu.forEach((item, i) => {
            if(i !== index) {
                item.activated = false;
            } else {
                item.activated = true;
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
                    title='TODO'
                    handleChangePage={ this.handleChangePage } />
                <Routes />
            </div>
        )
    }
}

