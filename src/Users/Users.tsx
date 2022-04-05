import React, { useEffect, useState } from 'react';
import { getUsers, User } from './endpoints';
import { UsersList } from './UsersList';
import styles from './Users.module.scss';


export const Users: React.FC<{}> = () => {

    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getUsers().then(res => setUsers(res.data)).finally(() => setLoading(false))
    }, [])


    return (
        <div className={styles.container}> 
            {loading
                ? (<div>loading</div>)
                : users?.length
                    ? <UsersList list={users}/>
                    : <div>NO yesers found</div>
            }
        </div>
        )
}