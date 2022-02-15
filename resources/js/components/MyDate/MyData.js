import React, { useState } from "react";
import "./MyData.css";
export default function MyData() {
    const [addform, setaddform] = useState(true);

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
                <div className="ax">
                    <header className="App-header">
                        <button onClick={clickbutton}>Add Employee</button>
                        {addform ? (
                            ""
                        ) : (
                            <>
                                <div className="appli">
                                    <form>
                                        <span>Enter the Employee Detailes</span>
                                        <br />
                                        <input
                                            className="form-input"
                                            className=""
                                            type="number"
                                            placeholder="Enter Employee id"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            placeholder="Enter Employee First Name"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            placeholder="Enter Employee Last Name"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="email"
                                            placeholder="Enter Employee Empail"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="number"
                                            min="999999999"
                                            placeholder="Enter Employee Phone Number"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            placeholder="Enter Employee State"
                                        />
                                        <br />
                                        <input
                                            className="form-input"
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            placeholder="Enter Employee City"
                                        />
                                        <br />
                                        {/* <input type="text" name="fieldname2" pattern="[0-9]{1,}" required></input> */}
                                        {/* <input type="number" max="999" onkeypress="if (this.value.length > 2) return false;"/> */}

                                        <button>save</button>
                                        <button onClick={clickbutton}>
                                            cancle
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="th">
                                        {/* S.no <TiArrowUnsorted /> */}
                                    </th>
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
