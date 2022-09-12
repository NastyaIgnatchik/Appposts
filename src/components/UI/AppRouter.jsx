import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../context/context';
import About from '../../pages/About';
import PostIdPage from '../../pages/PostIdPage';
import Posts from '../../pages/Posts';
import { Privatroutes} from '../../router/routs';
import { Publicroutes } from '../../router/routs';




const AppRouter = () => {
    
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
        ?
        <Routes>
            {Privatroutes.map(route =>
                <Route exact={route.exact}
                path={route.path}
                element={route.element} />
            )}
        
        </Routes>
        :
        <Routes>
            {Publicroutes.map(rout =>
                <Route exact={rout.exact}
                path={rout.path}
                element={rout.element} />
            )}
          
        </Routes>
);
};  


export default AppRouter;