import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useState } from 'react';
import { useFetching } from '../hooks/useFetching';


const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    const [post, setPost] = useState({})
    const [com, setcom] = useState([])
   
    const[fetchPostById,isloading,error] = useFetching( async ()=>{
        const response = await PostService.getBuId(params.id)
        setPost(response.data);
    })
    const[fetchcom ,comloading, comerror] = useFetching( async ()=>{
        const response = await PostService.getComments(params.id)
        setcom(response.data);
    })
   useEffect(()=>{fetchPostById(params.id); fetchcom(params.id)}, [])
    return (
        <div >
         <h1>{ post.title} </h1>
        {com.map(come => 
        <div>  
           <h2> {come.email} </h2>
           <h3>{come.body}</h3> 
        </div>
        )}
        </div>
    );
};

export default PostIdPage;