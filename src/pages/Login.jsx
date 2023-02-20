import React, {useContext, useState} from 'react';
import MyInput from "../components/ULI/MyInput";
import MyButton from "../components/ULI/MyButton";
import {Authcontex} from "../context";
import './Logix.css'
const Login = () => {
    const{isAuth,setisAuth}=useContext(Authcontex);


    const login=event=>{
        event.preventDefault();
        setisAuth(true);
        localStorage.setItem("auth",'true')
    }
    return (
        <div className='scale-down-center'>
           <h1>Страница для логина</h1>

            <form onSubmit={login} >

                 <MyInput type ="text" placeholder='Введите логин'/>
                <MyInput type ="text" placeholder='Введите пороль'/>
                <MyButton >Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;