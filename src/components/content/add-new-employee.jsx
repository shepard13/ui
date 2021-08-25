import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { setEmployees } from "../../data/employees";
const AddNewEmployee = () => {
    useEffect(() => {
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems, {});
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setEmployees(data);
    };
    return (
        <div id='modal2' class='modal'>
            <div class='modal-content'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text'
                        placeholder='First Name'
                        {...register("firstName", { required: true })}
                    />
                    {errors.login?.type === "required" && "login is required"}
                    <input
                        type='email'
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                    {errors.login?.type === "required" && "login is required"}
                    <input
                        type='text'
                        placeholder='Position'
                        {...register("position", { required: true })}
                    />
                    {errors.login?.type === "required" && "login is required"}

                    <button
                        type='submit'
                        className='submit waves-effect waves-light btn-large'
                    >
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewEmployee;
