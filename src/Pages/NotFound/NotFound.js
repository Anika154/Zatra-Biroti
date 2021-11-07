import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../image/404.jpg';


const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />

            <Link to="/"><button className="bg-blue-700  text-white m-3 p-2 text-lg font-bold">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;