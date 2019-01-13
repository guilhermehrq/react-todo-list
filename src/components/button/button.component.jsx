import React from 'react';
import If from '../utils/if';
import './button.component.scss';

const IconTextButton = props => {
    if(!props.label && !props.icon) {
        console.error('Deve ser informada ao menos a propriedade label ou icon do botão');
        return null;
    }

    return (
        <If test={!props.hide}>
            <button className={`md-button`} onClick={props.onClick}>
                <If test={props.icon}>
                    <i className='material-icons'>{props.icon}</i>
                </If>
                <If test={props.label}>
                    <label style={{ paddingLeft: !props.icon ? '16px' : '0' }}>{props.label}</label>
                </If>
            </button>
        </If>
    )
}

export default IconTextButton;

