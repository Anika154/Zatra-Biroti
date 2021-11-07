import React from 'react';
import gallery2 from '../../../image/gallery2.jpg';
import gallery3 from '../../../image/gallery3.jpg';
import gallery4 from '../../../image/gallery4.jpg';
import gallery5 from '../../../image/gallery6.jpg';

const Gallery = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-4  w-11/12 lg:w-9/12 mt-3 mb-2 mx-auto lg:p-6 lg:col-span-2 ">
            <div className="w-full ">
                <h5 className="text-red-700 font-mono font-bold text-lg"> FROM OUR BLOG</h5>
                <h2 className="text-blue-900 font-extrabold text-3xl lg:text-4xl text-left">BEST TRAVELLER'S SHARED PHOTO'S</h2>
                <small className="text-base font-mono text-justify">In a good year, I would be traveling to over 10 countries, spending at least 2 weeks in each country.</small>

            </div>
            <div className="m-3">
                <img src={gallery2} alt="" />
            </div>
            <div >
                <img src={gallery3} alt="" />
            </div>
            <div className="gap-x-3 my-3">
                <img className="h-100" src={gallery4} alt="" />
            </div>
            <div className="col-span-2 px-4 h-50">
                <img className="h-70" src={gallery5} alt="" />
            </div>
        </div>
    );
};

export default Gallery;