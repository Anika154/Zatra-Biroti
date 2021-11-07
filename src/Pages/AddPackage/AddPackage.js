import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hooks/useFirebase';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://chilling-cheateau-69804.herokuapp.com/packages', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    }



    return (
        <div className="add-package">
            <h2 className="text-blue-900 text-3xl mt-5 font-bold">ADD PACKAGES</h2>
            <form className=" w-3/12 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddPackage;