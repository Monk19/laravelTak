import React, { useContext } from "react";
import { useLocation, Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../Main/Main";
export default function Autorization() {
    let Auth = useContext(AuthContext);
    const location = useLocation();
    console.log(location, "this");
    return Auth ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}
// state={{ from: location }}
