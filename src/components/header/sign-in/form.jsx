import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignInForm = ({ setIsLogin, isLogin, closeModal }) => {
    const LOGIN = "admin";
    const PASSWORD = "password";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [invalidData, setInvalidData] = useState("");
    const onSubmit = (data) => {
        if (data.login === LOGIN && data.password === PASSWORD) {
            setIsLogin(true);
            setInvalidData("Success");
            closeModal();
        } else {
            setInvalidData("Try Again");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                placeholder='Login'
                {...register("login", { required: true })}
            />
            {errors.login?.type === "required" && "login is required"}
            <input
                type='password'
                placeholder='Password'
                {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && "password is required"}
            <input type='submit' />
            {invalidData}
        </form>
    );
};

export default SignInForm;
