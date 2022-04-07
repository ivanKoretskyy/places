import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Burger } from '../../shared';
import styles from './Nav.module.scss';

export const Nav: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(prev => !prev);
    }

    const context = useContext(AuthContext)

  return (
    <nav className={styles.navContainer}>
        <div className={styles.burger}>
          <Burger isOpen={isOpen} onToggle={onToggle}/>
        </div>

       
        {isOpen && (
            <div className={styles.navDialog} onClick={onToggle}>
              {context.isAuthenticated &&  <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/places'>Places</NavLink>}
                <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/'>Users</NavLink>
                <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/users/new'>New</NavLink>
            </div>
        )}
          <div className={classNames(styles.desctopNavContainer)}>
            {context.isAuthenticated && <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/places'>Places</NavLink>}
            <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/'>Users</NavLink>
            <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/users/new'>New</NavLink>
          </div>
          <div className={styles.loginContainer}>
            {context.isAuthenticated
              ? <NavLink className={classNames(styles.navItem, styles.login)} onClick={() => context.setIsAuthenticated(false)} to='/'>Logout</NavLink>
              : <NavLink className={({isActive}) => classNames(styles.navItem, styles.login, {[styles.isActive]: isActive})} to='/login'>Login</NavLink>
            }
            
          </div>
   </nav>
  )
}