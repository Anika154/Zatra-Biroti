import React from 'react';
import banner1 from '../../../image/banner1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="w-full h-3/6 banner ">
            <img className="w-full h-full" src={banner1} alt="banner" />
        </div>
    );
};

export default Banner;