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
            closeModal();
        } else {
            setInvalidData("Incorrect input");
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
            <span className='red-text darken-4'>{invalidData}</span>

            <button
                type='submit'
                className='submit waves-effect waves-light btn-large'
            >
                LOG IN
            </button>
        </form>
    );
};

export default SignInForm;
