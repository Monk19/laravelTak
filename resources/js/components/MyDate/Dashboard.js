import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

export default function Dashboard() {
    const [empData, setEmpData] = useState([]);
    const [viewStudent, setViewStudent] = useState("");
    const [closeView, setCloseView] = useState(true);
    const [onDelete, setOnDelete] = useState(false);
    const [stateCity, setStateCity] = useState({
        selectedState: "",
        selectedCity: "",
        totalState: [],
        dependentCities: [],
    });
    const [employeeDetails, setEmployeeDetails] = useState({
        FirstName: "Enter first Name",
        LastName: "Enter Last Name",
        Email_ID: "enter email",
        State_ID: "select State",
        City_ID: "select city",
    });
    const [update, setUpdate] = useState({ stat: false, index: "" });
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
        // axios
        //     .get("/states")
        //     .then((res) => {
        //         setStateCity((prev) => ({
        //             ...prev,
        //             selectedState: [...res.data],
        //         }));
        //     })
        //     .catch((err) => err);
    }, [onDelete]);

    return (
        <div>
            <div>
                <from>
                    <select options={stateCity.selectedState}>State</select>
                    <select options={stateCity.selectedState}>State</select>
                </from>
            </div>
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
                                    axios
                                        .delete(`/home/empdata/${index + 1}`)
                                        .then((res) => alert(res.data.message))
                                        .catch((err) => console.error(err));
                                    setOnDelete(!onDelete);
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
                                    // axios.post(
                                    //     `home/empdata/update/${index + 1}`
                                    // );
                                    setEmployeeDetails(empData[index]);
                                    setUpdate({
                                        status: true,
                                        index: index,
                                    });
                                }}
                            >
                                update
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {closeView ? (
                <div className="view">
                    <h4>{viewStudent.FirstName}</h4>
                    <h4>{viewStudent.LastName}</h4>
                    <h4>{viewStudent.State_ID}</h4>
                    <div
                        className="close-viewbtn"
                        onClick={() => {
                            setCloseView(!closeView);
                        }}
                    >
                        close
                    </div>
                </div>
            ) : (
                ""
            )}
            {update.status ? (
                <form method="POST">
                    <span>Please Enter updated values</span>
                    <br />

                    <input
                        type="text"
                        pattern="^[a-zA-Z]+$"
                        className="vali"
                        placeholder={employeeDetails.FirstName}
                        onChange={(e) => {
                            setEmployeeDetails((prev) => ({
                                ...prev,
                                FirstName: e.target.value,
                            }));
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        pattern="^[a-zA-Z]+$"
                        className="vali"
                        placeholder="Enter Employee Last Name"
                        placeholder={employeeDetails.LastName}
                        onChange={(e) => {
                            setEmployeeDetails((prev) => ({
                                ...prev,
                                LastName: e.target.value,
                            }));
                        }}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Enter Employee Empail"
                        className="vali"
                        placeholder={employeeDetails.Email_ID}
                        onChange={(e) => {
                            setEmployeeDetails((prev) => ({
                                ...prev,
                                Email_ID: e.target.value,
                            }));
                        }}
                    />
                    <br />
                    {/* <input
                                            type="number"
                                            min="999999999"
                                            placeholder="Enter Employee Phone Number"
                                            className="vali"
                                            placeholder={
                                                Number(
                                                    employeeDetails.phoneNumber
                                                )
                                                    ? employeeDetails.phoneNumber
                                                    : "enter number"
                                            }
                                            onChange={(e) => {
                                                setEmployeeDetails((prev) => ({
                                                    ...prev,
                                                    phoneNumber: e.target.value,
                                                }));
                                            }}
                                        /> */}
                    {/* <br /> */}
                    <input
                        type="text"
                        pattern="^[a-zA-Z]+$"
                        placeholder="Enter Employee State"
                        className="vali"
                        placeholder={employeeDetails.State_ID}
                        onChange={(e) => {
                            setEmployeeDetails((prev) => ({
                                ...prev,
                                State_ID: e.target.value,
                            }));
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        pattern="^[a-zA-Z]+$"
                        placeholder="Enter Employee City"
                        className="vali"
                        placeholder={employeeDetails.City_ID}
                        onChange={(e) => {
                            setEmployeeDetails((prev) => ({
                                ...prev,
                                City_ID: e.target.value,
                            }));
                        }}
                    />
                    <br />

                    {/* <input type="text" name="fieldname2" pattern="[0-9]{1,}" required></input> */}
                    {/* <input type="number" max="999" onkeypress="if (this.value.length > 2) return false;"/> */}

                    <button
                        className="applibtn"
                        onClick={(e) => {
                            e.preventDefault();
                            axios
                                .post(
                                    `/home/studentEntery/update/${
                                        update.index + 1
                                    }`,
                                    {
                                        ...employeeDetails,
                                    }
                                )
                                .then((res) => {
                                    // console.log(res);
                                })
                                .catch((err) => console.log(err));
                        }}
                    >
                        update
                    </button>
                    <button
                        className="applibtn"
                        onClick={() => {
                            setUpdate((prev) => ({ ...prev, status: false }));
                        }}
                    >
                        cancle
                    </button>
                </form>
            ) : (
                <></>
            )}
        </div>
    );
}
