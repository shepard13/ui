import React, { Fragment, useState } from "react";
import Header from "../header/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeesPage from "../pages/employees-page";
import AddNewEmployee from "../content/add-new-employee";

const App = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [addEmployee, setAddEmployee] = useState(false);

    if (!isLogin) {
    }

    return (
        <Fragment>
            <Router>
                <Header isLogin={isLogin} setIsLogin={setIsLogin} />

                <Switch>
                    <Route path='/Employees'>
                        <EmployeesPage />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
