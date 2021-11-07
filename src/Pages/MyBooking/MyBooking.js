import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
import Booking from '../Booking/Booking';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const { email } = useParams();
    useEffect(() => {
        fetch(`https://chilling-cheateau-69804.herokuapp.com/booking?email=${email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div class="p-3">
            <div className="col md:grid-cols-6 ">
                {
                    bookings.map(booking => <Booking
                        key={booking._id}
                        booking={booking}
                    ></Booking>)
                }

            </div>

        </div>
    );
};

export default MyBooking;