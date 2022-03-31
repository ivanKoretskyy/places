import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Burger } from '../../shared';
import styles from './Nav.module.scss';

export const Nav: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(prev => !prev);
    }


  return (
    <nav className={styles.navContainer}>
        <div className={styles.burger}>
          <Burger isOpen={isOpen} onToggle={onToggle}/>
        </div>

        {isOpen && (
            <div className={styles.navDialog} onClick={onToggle}>
                <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/places'>Places</NavLink>
                <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/'>Users</NavLink>
                <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/users/new'>New</NavLink>
            </div>
        )}
          <div className={classNames(styles.desctopNavContainer)}>
            <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/places'>Places</NavLink>
            <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/'>Users</NavLink>
            <NavLink className={({isActive}) => classNames(styles.navItem, {[styles.isActive]: isActive})} to='/users/new'>New</NavLink>
          </div>
   </nav>
  )
}