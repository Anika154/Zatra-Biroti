import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://chilling-cheateau-69804.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div class="p-3">
            <div className="col ">
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

export default AllBooking;