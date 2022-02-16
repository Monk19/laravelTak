import axios from "axios";
import React from "react";
import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import "./Mydata.css";

function MyData() {
    const [addform, setaddform] = useState(true);
    const [employeeDetails, setEmployeeDetails] = useState({
        FirstName: "Enter first Name",
        LastName: "Enter Last Name",
        Email_ID: "enter email",
        State_ID: "select State",
        City_ID: "select city",
    });
    const clickbutton = () => {
        setaddform(!addform);
    };

    return (
        <div className="container" style={{ backgroundColor: "red" }}>
            <div className="row justify-content-center">
                {/* <div className="col-md-8"> */}
                {/* <div className="card"> */}
                {/* <div className="card-header">App Component</div> */}
                {/* <button>hiii</button>
<input type="text" style={{backgroundColor:"red"}} placeholder="Enter text"/> */}
                <div className="App">
                    <header className="App-header">
                        <button className="applibtn" onClick={clickbutton}>
                            Add Employee
                        </button>
                        {addform ? (
                            ""
                        ) : (
                            <>
                                <div className="appli">
                                    <form method="POST">
                                        <span>Enter the Employee Detailes</span>
                                        <br />

                                        <input
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            className="vali"
                                            placeholder={
                                                employeeDetails.FirstName
                                            }
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
                                            placeholder={
                                                employeeDetails.LastName
                                            }
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
                                            placeholder={
                                                employeeDetails.Email_ID
                                            }
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
                                            placeholder={
                                                employeeDetails.State_ID
                                            }
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
                                            placeholder={
                                                employeeDetails.City_ID
                                            }
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
                                                        "/home/studentEntery",
                                                        { ...employeeDetails }
                                                    )
                                                    .then((res) => {
                                                        // console.log(res);
                                                    })
                                                    .catch((err) =>
                                                        console.log(err)
                                                    );
                                            }}
                                        >
                                            save
                                        </button>
                                        <button
                                            className="applibtn"
                                            onClick={clickbutton}
                                        >
                                            cancle
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="th"> S.no</th>
                                    {/* <TiArrowUnsorted /> */}
                                    <th className="th">Name</th>
                                    <th className="th">Email</th>
                                    <th className="th">Phone Number</th>
                                    <th className="th">State</th>
                                    <th className="th">City</th>

                                    <th className="th">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        {/* <form action="#"><input type="text"pattern="^[a-zA-Z]+$"/><input type="submit"/></form> */}
                    </header>
                </div>

                <div className="card-body">I'm an Appcomponent!</div>
            </div>
        </div>
        // </div>
        // </div>
    );
}

export default MyData;
