import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const {isAuth, setisAuth} = useContext(AuthContext)

  function out (){
    setisAuth(false)
    localStorage.removeItem('auth')
  }
    return (
        <div className='navbar'>
          <MyButton onClick={out}>выйти</MyButton>
<Link to="/about"> о сайте</Link>
<Link to="/posts"> посты</Link>
  </div>
    );
};

export default Navbar;