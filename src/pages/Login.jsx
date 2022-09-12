import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import Myinput from '../components/UI/input/Myinput';
import { AuthContext } from '../context/context';



const Login = () => { 

    const {isAuth, setisAuth} = useContext(AuthContext);
    
   function login (event){
        event.preventDefault();
        setisAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            для логина
            <form action="" onSubmit={login}>
                <Myinput type='text' placeholder='логин'/>
                <Myinput type='password' placeholder='пароль'/>
                <MyButton>Войти </MyButton>
            </form>
        </div>
    );
};

export default Login;