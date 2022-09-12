import React from 'react';
import  {useState, useMemo, useEffect} from 'react';
import PostItem from './components/PostItem';
import './styles/app.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Myinput from './components/UI/input/Myinput';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';
import PostFilter from './components/PostFilter';
import Mymodal from './Mymodal/Mymodal.jsx';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import {useFetching} from './hooks/useFetching.js'
import { getPageCount, getPagesArray } from './utils/page';
import Pagination from './components/Pagination';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context/context';






function App() {
  const [isAuth, setisAuth] = useState(false)

  useEffect(() => {
if(localStorage.getItem('auth')){
  setisAuth(true)
}
  })
return (
  <AuthContext.Provider value = {
    { isAuth,
    setisAuth, }
  }>
  <BrowserRouter>
  <Navbar/>
<AppRouter/>

</BrowserRouter>
</AuthContext.Provider>
)
  
}
export default App;

