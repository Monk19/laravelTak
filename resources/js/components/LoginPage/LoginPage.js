import React, { useState, useEffect, useContext } from "react";
import "./LoginPage.css";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Main/Main";
export default function LoginPage({ handleForm }) {
    const [enteredCredentials, setEnteredCredentials] = useState({
        userName: "",
        password: "",
    });
    const uName = "admin";
    let navigate = useNavigate();
    const location = useLocation();

    const submitForm = (e) => {
        console.log(enteredCredentials);
        e.preventDefault();
        console.log(enteredCredentials);
        if (
            enteredCredentials.password == uName &&
            enteredCredentials.userName == uName
        ) {
            handleForm(true);
            navigate("/home/profile", { replace: true });
        } else {
            handleForm(false);
        }
    };
    // console.log(location.pathname);
    const auth = useContext(AuthContext);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Please Login to continue</h1>
            <form>
                Name/EmailId
                <input
                    className="lg-inp"
                    type="text"
                    placeholder={"Please Enter Your Name"}
                    onChange={(e) => {
                        setEnteredCredentials((prev) => {
                            return { ...prev, userName: e.target.value };
                        });
                    }}
                />
                password
                <input
                    className="lg-inp"
                    type="text"
                    placeholder={"Enter Your Email"}
                    onChange={(e) => {
                        setEnteredCredentials((prev) => {
                            return { ...prev, password: e.target.value };
                        });
                    }}
                />
                <button className="subbtn" onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}
