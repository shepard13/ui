import React, { Fragment, useEffect, useState } from "react";
import AddNewEmployee from "./add-new-employee";
import { getEmployees } from "../../data/employees";

const EmployeesTable = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getEmployees().then((data) => {
            setEmployees(data);
            setLoading(false);
        });
    }, [employees]);

    console.log(employees);
    if (loading) {
        return (
            <div className='loader'>
                <div class='preloader-wrapper big active'>
                    <div class='spinner-layer spinner-blue-only'>
                        <div class='circle-clipper left'>
                            <div class='circle'></div>
                        </div>
                        <div class='gap-patch'>
                            <div class='circle'></div>
                        </div>
                        <div class='circle-clipper right'>
                            <div class='circle'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <table className='striped highlight centered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.firstName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.position}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='add-content-btn'>
                <a
                    class='btn-floating btn-large waves-effect waves-light modal-trigger'
                    href='#modal2'
                >
                    <i class='material-icons'>add</i>
                </a>
            </div>
            <AddNewEmployee />
        </Fragment>
    );
};

export default EmployeesTable;
