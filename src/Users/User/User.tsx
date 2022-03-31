import React from 'react';
import { Link } from 'react-router-dom';
import { User as IUser } from './../endpoints';
import styles from './User.module.scss';

export interface UserProps {
    user: IUser
}

export const User: React.FC<UserProps> = ({ user }) => {
    const imageSrc = `https://picsum.photos/200/300?random=${user.id}`;
    const link = `/users/${user.id}/places`;
    return (
        <Link to={link} className={styles.link}>
          <div className={styles.container}>
            <img src={imageSrc}/>
            <div> {user.name}</div>
            <div> {user.address.city}</div>
            <div> {user.email}</div>
          </div>
        </Link>

    )
}