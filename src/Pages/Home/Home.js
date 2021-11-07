import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Gallery from './Gallery/Gallery';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Blog></Blog>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;