import classNames from 'classnames';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
}



export const Input: React.FC<InputProps> = (props) => {
    
    const {className, ...rest} = props

    return <input className={classNames(styles.input, className)} {...rest}/>
}