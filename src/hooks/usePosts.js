import { useMemo } from "react";

export const useSortedPosts = (posts,sort)=>{
    const SortedPosts = useMemo(()=>{ console.log('fy'); if(sort) { return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))}
    return posts;}, [sort, posts])
    return SortedPosts;
}

export const usePosts = (posts,sort,query)=> {
    const SortedPosts = useSortedPosts(posts,sort)
    const SortedandserchedPosts = useMemo (()=>{return SortedPosts.filter(post=>post.title.includes(query))},[SortedPosts,query])
    return SortedandserchedPosts;
}