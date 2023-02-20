import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFeching} from "../hooks/useFeching";
import PostService from "../components/API/PostService";
import Loading from "../components/ULI/Loading/Loading";

const PostPages = () => {


    const params=useParams()

    const[post,setpost]=useState({})

    const[comments,setcomments]=useState([])

    const[fetchPostById,isLoading,error]=useFeching (async (id)=>{

        const responce= await PostService.getById(params.id)
        setpost(responce.data)
    })


    const[fetchComment,isComLoading,Comerror]=useFeching (async (id)=>{

        const responce= await PostService.getCommentByPostId(params.id)
        setcomments(responce.data)
    })


    useEffect(()=>{

        fetchPostById(params.id)
        fetchComment(params.id)


    },[])



    return (
        <div data-testid="page-page">
            <h1>Название поста {params.id}</h1>

            {isLoading
                ?   <Loading/>


                :   <div>{post.id}.{post.title}</div>

            }
            <h1>
                Коментарии
            </h1>

            {isComLoading
                ?   <Loading/>


                : <div>
                    {comments.map(comm=>
                        <div key={comm.id} style={{marginTop:15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                        </div>
                    )}


                </div>

            }


        </div>
    );
};

export default PostPages;