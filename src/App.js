
import './Style/App.css';

import {BrowserRouter, Link, Routes, Route, Redirect, Navigate} from "react-router-dom";
import Abouts from "./pages/Abouts";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import PostPages from "./pages/PostPages";
import {publicRoutes,privateRoutes} from "./Router/router";
import {Authcontex} from "./context";
import {useEffect, useState} from "react";
import AppRouter from "./pages/AppRouter";
import MyButton from "./components/ULI/MyButton";


function App(){
    const [isAuth,setisAuth]=useState(false)

    useEffect(()=>{
        if(localStorage.getItem("auth")){

            setisAuth(true)
        }

    },[])

    const logout=()=>{

        setisAuth(false)
        localStorage.removeItem("auth")
    }

    return(

        <Authcontex.Provider value={{
            isAuth,
            setisAuth
        }}>


            <div className="navbar scale-up-top" >
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
                <div className="navbar__links">
                    <Link to="/about" data-testid="about-link">О сайте</Link>
                    <Link to="/page" data-testid="page-link">Посты</Link>
                </div>

            </div>
            <AppRouter/>



</Authcontex.Provider>

    )
}

export default App;