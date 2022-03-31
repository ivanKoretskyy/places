import React, { useEffect, useState } from 'react';
import { getUsers, User } from './endpoints';
import { UsersList } from './UsersList';
import styles from './Users.module.scss';


export const Users: React.FC<{}> = () => {

    const [users, setUsers] = useState<User[] | null>(null);
    useEffect(() => {
        getUsers().then(res => setUsers(res.data))
    }, [])


    return (
        <div className={styles.container}> 
            {users?.length ? <UsersList list={users}/> : <div>NO yesers found</div>}
        </div>
        )
}