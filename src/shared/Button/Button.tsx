import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    className?: string;
}

export const Button: React.FC<ButtonProps> = props => {

    const {className, children, ...rest} = props;
    return <button {...rest} className={classNames(styles.submitButton, className)}>{props.children}</button>
}
