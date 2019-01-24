import React, { Component } from 'react';
import Card from '../../../components/card/card.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import timeAgo from '../../../components/utils/time-ago.service';
import { FAB } from '../../../components/button/button.component';

import './task.component.scss';

export default class TaskComponent extends Component {
    constructor(props) {
        super(props);

        this.renderOverlayActions = this.renderOverlayActions.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
    }

    renderOverlayActions (i) {
        if (this.props.tasksList[i].openActions) {
            return (
                <div className='overlay-actions'>
                    <FAB icon='edit' backgroundColor='transparent' color='#fff' className='not-raised' />
                    <FAB icon='done' backgroundColor='transparent' color='#fff' className='not-raised' />
                </div>
            )
        }
    }

    renderTasks() {
        const tasks = this.props.tasksList.map((item, i) => {
            const timeAgoText = timeAgo(item.date, true);
            return (
                <Card key={ item.id }>
                    <div onMouseEnter={() => this.props.showOverlayActions(i)} onMouseLeave={() => this.props.showOverlayActions(i)} style={{width: '100%', display: 'flex'}}>
                        <span className='category-color' style={{ backgroundColor: item.categoryColor }}></span>
                        <div className='ui-card-content'>
                            <div className='category-container'>
                                <span className='category-name' style={{ color: item.categoryColor }}>{ item.categoryName }</span>
                            </div>
                            <div className='info-task'>
                                <p className='title'>{ item.title }</p>
                                <p className='description'>{ item.description }</p>
                            </div>
                            <div className='date-container'>
                                <span className='date' style={{ color: timeAgoText === 'hoje' ? 'red' : 'black' }}>{ timeAgoText }</span>
                            </div>
                        </div>
                        <ReactCSSTransitionGroup
                            transitionName='overlay'
                            transitionEnterTimeout={200}
                            transitionLeaveTimeout={200}>
                            { this.renderOverlayActions(i) }
                        </ReactCSSTransitionGroup>
                    </div>
                </Card>
            )
        });

        return tasks;
    }

    render() {
        return (
            <div className='container'>
                { this.renderTasks() }
            </div>    
        )
    }
}