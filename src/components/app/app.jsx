import React, { Fragment, useState } from "react";
import Header from "../header/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeesPage from "../pages/employees-page";

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

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
                    <Route path='/Menu1'>
                        <h1>Menu1</h1>
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
