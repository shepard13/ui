import React from "react";
import Header from "../header/header";
import SignIn from "../sign-in/sign-in";
import NavMenu from "../nav-menu/nav-menu";

const App = () => {
    return (
        <div>
            <Header />
            <SignIn />
            <NavMenu />
            <h1>App</h1>
        </div>
    );
};

export default App;
