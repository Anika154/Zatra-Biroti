import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const Package = ({ item }) => {
    const { _id, name, price, description, img } = item;
    const cartIcon = <FontAwesomeIcon icon={faArrowRight} />
    const history = useHistory();

    const handleBooking = () => {
        history.push(`/confirmbooking/${_id}`);

    }

    return (
        <div class="p-3">
            <div className="col ">
                <div className="card rounded shadow">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-blue-900 text-center">{name}</h2>
                        <h4 className="card-title font-bold text-xl text-red-700">{price}</h4>
                        <p className="card-text text-justify pb-3">{description}</p>
                        {/* <Link to={'/service/' + props.service.id}> */}
                        <button onClick={handleBooking} className="btn rounded-pill opacity-75 bg-red-600 text-white">Book Now {cartIcon}</button>
                        {/* </Link> */}
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Package;