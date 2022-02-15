import React, { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Main from "./Main/Main";
export const authContext = React.createContext(true);
export default function App() {
    const [enter, setEnter] = useState(false);
    const CheckEntery = (x) => {
        setEnter(x);
        console.log("triggered");
    };

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
}
{
    /* <div>{enter ? <Home /> : <LoginPage enter={CheckEntery} />}</div>; */
}
