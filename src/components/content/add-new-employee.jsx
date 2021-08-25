import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const AddNewEmployee = ({ addNewEmployee, id }) => {
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
        addNewEmployee({ id: ++id, ...data });
    };
    return (
        <div id='modal2' className='modal'>
            <div className='modal-content'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='close'>
                        <button className='modal-close right waves-effect waves-green btn'>
                            X
                        </button>
                    </div>
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
                        className='modal-close  submit waves-effect waves-light btn-large'
                    >
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewEmployee;
