import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hooks/useFirebase';

const ConfirmBooking = () => {
    // const { name, description, price, img } = props.package;
    const { id } = useParams();
    const [book, setBook] = useState({});

    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.name === '') {
            data.name = user.displayName;
        }
        if (data.email === '') {
            data.email = user.email;

        }
        const bookingDetail = {
            email: user.email,
            status: "pending",
            userData: data,
            packageDetail: book
        }
        axios.post('https://chilling-cheateau-69804.herokuapp.com/booking', bookingDetail)
            .then(res => {
                // console.log(res);

                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    }



    useEffect(() => {
        fetch(`https://chilling-cheateau-69804.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])



    return (
        <div class="p-3 w-50 mx-auto ">
            <div className="col">
                <div className="card rounded shadow">
                    <img src={book.img} className="card-img-top font-bold w-6/12 mx-auto m-3" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-blue-900 text-center">{book.name}</h2>
                        <h4 className="card-title font-bold text-xl text-red-700"> {book.price}</h4>
                        <p className="card-text text-justify pb-3">{book.description}</p>
                    </div>
                </div>
            </div>
            <div className="add-package">
                <h2 className="text-blue-900 text-3xl mt-5 font-bold">Confirm Your Booking</h2>
                <form className=" w-3/12 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="Enter your name" />
                    <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                    <input type="number" {...register("phone")} placeholder="Phone" />
                    <input type="submit" />
                </form>

            </div>
        </div >


    );
};

export default ConfirmBooking;