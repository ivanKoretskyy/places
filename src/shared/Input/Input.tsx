import classNames from 'classnames';
import React, { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    ref?: Ref<HTMLInputElement>
}

export const Input: React.FC<InputProps> =  React.forwardRef((props, ref) => {
    
    const {className, ...rest} = props

    return <input ref={ref} className={classNames(styles.input, className)} {...rest}/>
})