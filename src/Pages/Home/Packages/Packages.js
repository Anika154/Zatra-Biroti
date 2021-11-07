import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://chilling-cheateau-69804.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className="mt-20">

            <h5 className="text-red-700 font-mono font-extrabold text-xl"> EXPLORE GREAT PLACES</h5>
            <h2 className="text-blue-900 font-extrabold text-5xl p-4">POPULAR PACKAGES</h2>
            <small className="text-base font-mono text-center">All travel has its advantages. If the passenger visits better countries,<br /> he may learn to improve his own. And if fortune carries him to worse, he may learn to enjoy it.</small>
            <div className="package-container grid grid-cols-1 lg:grid-cols-3 gap-3 p-12">

                {
                    packages.map(item => <Package
                        key={item._id}
                        item={item}
                    ></Package>)
                }
            </div>

        </div>
    );
};

export default Packages;