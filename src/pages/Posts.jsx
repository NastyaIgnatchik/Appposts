import React from 'react';
import  {useState, useEffect} from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/page';
import PostFilter from '../components/PostFilter';
import Mymodal from '../Mymodal/Mymodal';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import { useRef } from 'react';
import Myselect from '../components/UI/select/Myselect';


const Posts = () => {
    
       

            const [posts,setPosts] = useState([{title: 'Aha', body: 'good dog'}]);
           
           const [filter,setFilter] = useState({sort:'', query:''});
          
           const [modal,setModal] =useState('false');
           const [totalPages, settotalPages] = useState(0)
           const [limit, setlimit] = useState(10)
           const [page, setpage] = useState(1)
           const lastElement = useRef()
           const observer = useRef()
           
           
          // //  useEffect(()=>{
          // //   fetchPost()
          // //    },[])
          

          
              useEffect(() => {
                fetchPost(limit,page);
              }, [page,limit]);
            
            
           const SortedandserchedPosts = usePosts(posts, filter.sort, filter.query)
           
          
          
           const [fetchPost,loading, posterror] = useFetching( async ()=>
           {const response = await PostService.getAll(limit,page)
            setPosts([...posts, ...response.data])
            const totalCount = response.headers['x-total-count']
          settotalPages(getPageCount(totalCount,limit))});
                                                                                
           const changePage = (page) =>{
            setpage(page)
            fetchPost(limit,page)
          
           }
           useEffect(() => {
            if(loading ) return;
            
            if(observer.current) observer.current.disconnect();
          var callback = function(entries, observer) {
            if(entries[0].isIntersecting && page < totalPages)
             { setpage(page+1)
              console.log( page);}
          };
       observer.current = new IntersectionObserver(callback);
       observer.current.observe(lastElement.current)
          }, [loading]);  
           
          
           
           const createProps =(newPost)=>{
           setPosts([...posts, newPost])
           setModal(false)
           };
          
          
           const removePost =(post)=>{
          setPosts(posts.filter(p => p.id!==post.id))
           };
          
          
          
            return (
              <div className='App'>
                <button onClick={()=>fetchPost()}> gggggg</button>
                 <MyButton onClick={() => setModal(true)}> создать пользователя</MyButton>
                 <Mymodal visible={modal} setVisible={setModal}>   <PostForm create={createProps}/></Mymodal>
            
               <hr style={{margin: '15px 0' }}/>
           
               <PostFilter filter={filter} setFilter={setFilter}/>
              <Myselect 
              value={limit} onChange={value => setlimit(value)} options={[
                {value:2,name:'2'},
                {value:5,name:'5'},
                {value:1,name:'1'},

              ]}/>


             
              <PostList remove={removePost} posts={SortedandserchedPosts} title='Список хорошеньких'/>
              <div  ref={lastElement} style={{background:'pink', height: 20}}> </div>
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
              
           
          </div>)
          
          }
    


export default Posts;