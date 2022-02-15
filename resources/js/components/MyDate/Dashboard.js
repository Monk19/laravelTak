import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

export default function Dashboard() {
    const [empData, setEmpData] = useState([]);
    const [viewStudent, setViewStudent] = useState("");
    const [closeView, setCloseView] = useState(true);
    let x;
    useEffect(() => {
        axios
            .get("/home/empdata")
            .then((res) => {
                setEmpData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        setCloseView(false);
    }, []);

    return (
        <div>
            <table className="userDisplayTable">
                <tbody>
                    <tr>
                        <th>user_ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>State ID</th>
                    </tr>
                    {empData.map((item, index) => (
                        <tr key={item.user_Id}>
                            <td>{item.user_Id}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Email_ID}</td>
                            <td>{item.State_ID}</td>
                            <td
                                className="td-delbtn"
                                onClick={() => {
                                    axios.post(`home/empdata/${item.user_ID}`);
                                }}
                            >
                                Delete
                            </td>

                            <td
                                className="td-viewbtn"
                                onClick={() => {
                                    console.log(index);
                                    setViewStudent(empData[index]);
                                    setCloseView(true);
                                }}
                            >
                                View
                            </td>
                            <td
                                className="td-updatebtn"
                                onClick={() => {
                                    axios.post(`home/empdata/${item.user_ID}`);
                                }}
                            >
                                update
                            </td>
                        </tr>
                    ))}
                    {closeView ? (
                        <div>
                            <h4>{viewStudent.FirstName}</h4>
                            <h4>{viewStudent.LastName}</h4>
                            <h4>{viewStudent.State_ID}</h4>
                            <button
                                onClick={() => {
                                    setCloseView(!closeView);
                                }}
                            >
                                X
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </tbody>
            </table>
        </div>
    );
}
