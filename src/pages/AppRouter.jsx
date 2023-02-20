import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Router/router";
import Error from "./Error";
import {Authcontex} from "../context";
import Posts from "./Posts";
import Login from "./Login";

const AppRouter = () => {
    const{isAuth}=useContext(Authcontex)
    console.log(isAuth)
    return (
        isAuth
            ?
            <Routes>

             {privateRoutes.map(routes =>

            <Route
                element={routes.element}
                path={routes.path}
                exact={routes.exact}
                key={routes.path}

            >
            </Route>
        )}
                <Route path="*" element={<Posts/>} />
                <Route path="/" element={<Navigate replace to="/login" />}/>
            </Routes>
            :


            <Routes>


            {publicRoutes.map(routes =>

                <Route
                    element={routes.element}
                    path={routes.path}
                    exact={routes.exact}
                    key={routes.path}
                >

                </Route>



            )}
                <Route path="*" element={<Login/>} />
                <Route path="/" element={<Navigate replace to="/login" />}/>
            </Routes>
            /*<Route path="/about" element={  <Abouts/>} >

                </Route>
                <Route exact path="/page" element={  <Posts/>} >

                </Route>

                <Route  exact path="/page/:id" element={  <PostPages/>} >

                </Route>
*/

    );
};

export default AppRouter;