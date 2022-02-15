import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home/Home";
import Register from "../LoginPage/Register";
import MyData from "../MyDate/MyData";
import Autorization from "../Auth/Autorization";
import Dashboard from "../MyDate/Dashboard";
export const AuthContext = React.createContext(true);
export default function Main() {
    const [isLogged, setIsLogged] = useState(false);
    let FormHandling = (x) => {
        setIsLogged(x);
    };

    return (
        <AuthContext.Provider value={isLogged}>
            <div>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            index
                            element={<LoginPage handleForm={FormHandling} />}
                        />
                        <Route
                            path="login"
                            element={<LoginPage handleForm={FormHandling} />}
                        />
                        <Route path="register" element={<Register />} />

                        <Route path="home" element={<Autorization />}>
                            <Route index element={<MyData />} />
                            <Route
                                path="profile"
                                element={
                                    isLogged ? (
                                        <MyData />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path="dashboard"
                                element={
                                    isLogged ? (
                                        <Dashboard />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}
