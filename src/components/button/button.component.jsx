import React from 'react';
import If from '../utils/if/if.directive';
import './button.component.scss';
import './fab.component.scss';


function verifyButtonType(props) {
    if (props.label && !props.icon) {
        return ' text-button';
    } else if (!props.label && props.icon) {
        return ' icon-button';
    } else {
        return ' text-icon-button';
    }
}

const Button = props => {
    if (!props.label && !props.icon) {
        console.error('Deve ser informada ao menos a propriedade label ou icon do botão');
        return null;
    }

    return (
        <If test={!props.hide}>
            <button
                className={`md-button${verifyButtonType(props)}`}
                style={{ backgroundColor: props.backgroundColor || '#fff', color: props.color || '#000' }}
                onClick={props.onClick}>
                <If test={props.icon}>
                    <i className='material-icons'>{props.icon}</i>
                </If>
                <If test={props.label}>
                    <label>{props.label}</label>
                </If>
            </button>
        </If>
    )
}

const FAB = props => {
    return (
        <button 
            className={`fab ${props.type || 'normal'} ${props.className || ''}`} 
            onClick={props.onClick}
            style={{ backgroundColor: props.backgroundColor || '#fff', color: props.color || '#000' }}>
            <i className='material-icons'>{ props.icon }</i>
        </button>
    )
}

export { Button, FAB };

