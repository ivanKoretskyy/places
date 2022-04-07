import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button, Input } from '../shared';

import styles from './Login.module.scss';

type LoginFormType = {
    username: string;
    password: string;
}

export const Login: FC<{}> = () => {
    const navigate = useNavigate();
    const loginFormMethods = useForm<LoginFormType>()
    const context = useContext(AuthContext);
    const onSubmit: SubmitHandler<LoginFormType> = data => {
        context.setIsAuthenticated(true);
        console.info(data); navigate('/');
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={loginFormMethods.handleSubmit(onSubmit)}>
                <div>UserName</div>
                <Input {...loginFormMethods.register("username", {required: true})}/>
                <div>Password</div>
                <Input {...loginFormMethods.register("password", {required: true})}/>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
}