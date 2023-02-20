import React, {useState} from 'react';
import MyInput from "./ULI/MyInput";
import MyButton from "./ULI/MyButton";

const PostForm = ({create}) => {


    const [post,setposter]=useState({title:'',body:''})


    const addNewPost=(e)=>{
        e.preventDefault()////отменяет обновление страницы


        const newPost={
            ...post,id:Date.now()
       }
       create(newPost)

        setposter({title: "",body: ""})

    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setposter({...post, title: e.target.value })}//управляемые компонент

                type='text'
                placeholder="Название поста"
            />


            <MyInput
                value={post.body}
                onChange={e => setposter({...post, body: e.target.value})}

                type='text'
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;