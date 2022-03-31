import React from 'react';
import { User as IUser } from '../endpoints';
import { User } from '../User'

import styles from './UsersList.module.scss';

export interface UserListPros {
    list: IUser[]
}



export const UsersList: React.FC<UserListPros> = props => {
    return <div className={styles.list}>{props.list.map(user => {
        return <User key={user.id} user={user}/>
    })}</div>
}