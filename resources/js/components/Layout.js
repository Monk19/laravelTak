import React, { useState, useContext } from "react";
import { AuthContext } from "./Main/Main";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Layout.css";
export default function Layout() {
    let auth = useContext(AuthContext);
    let navigate = useNavigate();
    return (
        <main>
            {!auth ? (
                <div className="Nav">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/home">home</Link>
                </div>
            ) : (
                <>
                    <div>
                        <div className="Nav">
                            <Link to="home/profile">Profile</Link>
                            <Link to="home/dashboard">Dashboard</Link>
                            <Link
                                to=""
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                logout
                            </Link>
                        </div>
                    </div>
                </>
            )}
            {/* <h1 style={{ textAlign: "center" }}>Welcome to Home Page</h1> */}
            <Outlet />
        </main>
    );
}
