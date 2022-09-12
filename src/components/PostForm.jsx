import React, {useState}from 'react';
import Myinput from './UI/input/Myinput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    
    const [post,setPost] = useState({title:'',body:''})

    const addNewPost = (e)=>{
        e.preventDefault()
        const newPost={
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
        }
    return (
        
    <form>  
        <Myinput value={post.title} onChange={e=>setPost({...post,title:e.target.value})} type='text' placeholder='название'/>
        <Myinput  value={post.body}  onChange={e=>setPost({...post,body:e.target.value})} type='text' placeholder='описание'/>
        <MyButton onClick={addNewPost} >Создать</MyButton>
      </form> 
       
    );
};

export default PostForm;