import React, { useContext } from 'react';
import { authRoutes } from '../routes';
import { publicRoutes } from '../routes';
import {  Routes, Route,}  from 'react-router-dom';
import { Context } from '../index';



const AppRouter = () => {

   const {user} = useContext(Context)
   
   return (
      <Routes>
               {publicRoutes.map(({path, Component}) =>
                  <Route key={path} path={path} element={<Component />}/>
               )}  
               {user.isAuth === true && authRoutes.map(({path, Component}) =>
                  <Route key={path} path={path} element={<Component />}/>
               )}
        </Routes>
  )
}
export default AppRouter;
