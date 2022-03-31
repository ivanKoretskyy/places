import classNames from 'classnames';
import React from 'react';
import { Burger } from '../Burger';

import styles from './Modal.module.scss'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = props => {

    if(!props.isOpen) {
        return null;
    }
    return (
        <div className={classNames(styles.modalOverlay)}>
            <div className={styles.modalContainer}>
            <div className={styles.closeIcons}><Burger isOpen={true} onToggle={props.onClose}/></div>
            {props.children}
            </div>
        </div>
    )
}