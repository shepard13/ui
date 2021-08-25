import React, { Component, Fragment, useEffect, useState } from "react";
import AddNewEmployee from "./add-new-employee";
import { getEmployees } from "../../data/employees";

const EmployeesTable = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idNum, setIdNum] = useState(4);

    useEffect(() => {
        getEmployees().then((data) => {
            setEmployees(data);
            setLoading(false);
        });
    }, []);

    const deleteEmployee = (id) => {
        const result = employees.filter((elem) => elem.id !== id);
        setEmployees(result);
    };

    const addNewEmployee = (data) => {
        setEmployees([...employees, data]);
        setIdNum(idNum + 1);
    };

    if (loading) {
        return (
            <div className='loader'>
                <div className='preloader-wrapper big active'>
                    <div className='spinner-layer spinner-blue-only'>
                        <div className='circle-clipper left'>
                            <div className='circle'></div>
                        </div>
                        <div className='gap-patch'>
                            <div className='circle'></div>
                        </div>
                        <div className='circle-clipper right'>
                            <div className='circle'></div>
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
                        <th>#</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.position}</td>
                                <td>
                                    <a
                                        onClick={() =>
                                            deleteEmployee(employee.id)
                                        }
                                        className='btn-floating btn red waves-effect waves-light'
                                    >
                                        <i className='material-icons'>delete</i>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='add-employee'>
                <a
                    className='btn-floating waves-effect waves-light btn-large modal-trigger'
                    href='#modal2'
                >
                    <i class='material-icons'>add</i>
                </a>
            </div>
            <AddNewEmployee addNewEmployee={addNewEmployee} id={idNum} />
        </Fragment>
    );
};

export default EmployeesTable;
