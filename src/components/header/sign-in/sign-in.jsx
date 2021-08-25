import React, { useEffect } from "react";
import SignInForm from "./form";

const SignIn = ({ setIsLogin, isLogin }) => {
    useEffect(() => {
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems, {});
    }, []);

    const closeModal = () => {
        M.Modal.init(document.querySelectorAll(".modal"), {}).close();
    };
    return (
        <div id='modal1' class='modal'>
            <div class='modal-content'>
                <SignInForm
                    setIsLogin={setIsLogin}
                    isLogin={isLogin}
                    closeModal={closeModal}
                />
            </div>
        </div>
    );
};

export default SignIn;
