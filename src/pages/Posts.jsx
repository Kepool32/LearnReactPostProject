

import React, {useEffect, useMemo, useState,useRef} from "react";
import {usePosts} from "../hooks/usePosts";
import {GetPageCount, useGetPagesArray} from "../components/Utils/usePages";
import {useFeching} from "../hooks/useFeching";
import MyButton from "../components/ULI/MyButton";
import MyModal from "../components/ULI/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/ULI/Pagination";
import PostService from "../components/API/PostService";
import Loading from "../components/ULI/Loading/Loading";
import {useObserver} from "../hooks/useObserver";
import Myselect from "../components/ULI/Myselect";




const Posts=()=>{


    const [posts,setpost]=useState([

    ])

    const[filter,setfilter]=useState({sort:"",query:""})
    const [modal,setmodal]=useState(false);
    const [totalPages,settotalpages]=useState(0);
    const sortedAndSearchedPost=usePosts(posts,filter.sort,filter.query)
    const [limit,setlimit]=useState(10)
    const [page,setpage]=useState(1)

    const pagesArray=useGetPagesArray(totalPages)
    const lastelement=useRef();


    /*
    /!*   let pagesArray=useMemo(()=>{

            getPagesArray(totalPages)

        },[totalPages*!/])
    */


    const[fetchPosts,isPostLoading,postError]=useFeching(async ()=>{

        const response=await PostService.getALL(limit,page);


        setpost([...posts,...response.data])
        const TotalCount=response.headers['x-total-count']

        settotalpages(GetPageCount(TotalCount,limit))
    })


    useObserver(lastelement,page<totalPages,isPostLoading,()=>{

        setpage(page+1);
    })




    useEffect(()=>{
        fetchPosts(limit,page)


    },[page,limit])


    /*   function getsortedPost(){

       console.log("hello")
       if(selectorsort){
           return [...posts].sort((a,b)=> a[selectorsort].localeCompare(b[selectorsort]))

       }
       return posts;


       }*/
    /*    const sertedPosts=getsortedPost()*/









    /* const [title,settitle]=useState()
     const [body,setbody]=useState()*/

    const createPost=(newPost)=>{

        setpost([...posts,newPost])
    }




    const removePost=(post)=>{
        setpost(posts.filter(p=>p.id !== post.id))



    }

    const changePage=(page)=>{
        setpage(page);


    }


    return (
        <div className='App'>
            {/*  <button onClick={fetchPosts}>

            Get Posts
        </button>*/}
            <MyButton style={{marginTop:40}} onClick={()=>setmodal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setvisible={setmodal}>
                <PostForm create={createPost}/>

            </MyModal>

            <hr style={{margin:'15px 0'}}/>


            <PostFilter

                filter={filter}
                setFilter={setfilter}
            />
            <Myselect
                value={limit}
                onChange={value=>setlimit(value)}
                defaultValue="Кол-во элементов на странице"
                option={[
                    {value:5,name:"5"},
                    {value:10,name:"10"},
                    {value:25,name:"25"},
                    {value:-1,name:"Показать все"},

                ]
                }



            />


            {postError &&
            <h1> Произошла Ошибка ${postError}</h1>

            }

            < PostList remove={removePost} posts={sortedAndSearchedPost} title="Новый пост js"/>
            <div ref={lastelement} style={{height:20,background:'red'}}>



            </div>
            {isPostLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loading/></div>
            }



            <Pagination
                page={page }
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>


    );
}

export default Posts;