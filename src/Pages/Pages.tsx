import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Login } from '../Login';
import { Places } from '../Places/Places';
import { NewUser, Users } from '../Users';

export const Pages: React.FC<{}> = () => {
    const context = useContext(AuthContext);
    return (
        <Routes>
          {context.isAuthenticated && <Route path='/places' element={<Places/>} />}
          <Route path='/' element={<Users/>} />
          <Route path='/users/:userId/places' element={<Places/>} />
          {/* <Route path='/users/new' element={<NewUser/>} /> */}
          {!context.isAuthenticated && <Route path='/login' element={<Login/>} />}
        </Routes>
    )
}