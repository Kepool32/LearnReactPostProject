import {useMemo} from "react";

export const useSortedPosts=(posts,sort)=>{
    const sertedPosts=useMemo(()=>{
        console.log("hello")
        if(sort){
            return [...posts].sort((a,b)=> a[sort].localeCompare(b[sort]))

        }
        return posts;

    },[sort,posts])

    return sertedPosts;
}

export const usePosts=(posts,sort,query)=>{
    const sertedPosts=useSortedPosts(posts,sort);


    const sortedAndSearchedPost=useMemo(()=>{


        return sertedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))


    },[query,sertedPosts])

    return sortedAndSearchedPost;

}

/*
export const usePostArray=()=>{


}*/
