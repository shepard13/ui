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
        if (data) {
            addNewEmployee({ id: ++id, ...data });
            M.Modal.init(document.querySelectorAll(".modal"), {}).close();
        }
    };
    const closeModal = () => {
        M.Modal.init(document.querySelectorAll(".modal"), {}).close();
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
                        placeholder='Name'
                        {...register("name", { required: true })}
                    />
                    {errors.name?.type === "required" && "name is required"}
                    <input
                        type='text'
                        placeholder='Surname'
                        {...register("surname", { required: true })}
                    />
                    {errors.surname?.type === "required" &&
                        "surname is required"}
                    <input
                        type='email'
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && "email is required"}
                    <input
                        type='number'
                        placeholder='Age'
                        {...register("age", { required: true })}
                    />
                    {errors.age?.type === "required" && "age is required"}

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
