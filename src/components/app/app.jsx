import React, { useState } from "react";
import Header from "../header/header";
import SignIn from "../sign-in/sign-in";

const App = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            <Header isLogin={isLogin} />
            <SignIn setIsLogin={setIsLogin} isLogin={isLogin} />
            <h1>App</h1>
        </div>
    );
};

export default App;
