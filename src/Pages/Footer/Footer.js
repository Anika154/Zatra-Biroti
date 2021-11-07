import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const cartIcon = <FontAwesomeIcon icon={faMapMarked} />
    return (
        <div class="grid grid-cols-3 gap-4 bg-gray-800 text-white py-5">
            <div>
                <p className="font-lg text-lg">Privacy Policy | Term & Condition | FAQ</p>
            </div>
            <div>
                <h4 className="text-4xl font-bold text-yellow-500 italic">{cartIcon} Zatra-Biroti</h4>
            </div>
            <div>
                <p className="text-lg font-lg">
                    © 2021 Made With.All Rights Reserved</p>

            </div>
        </div>



    );
};

export default Footer;