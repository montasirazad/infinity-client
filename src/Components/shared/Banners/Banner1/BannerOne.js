import React from 'react';
import './BannerOne.css';
import bannerOne from '../../../../image/cup-banner.jpg'

const BannerOne = () => {

    return (
        <div className='banner1-div'>
            

            <div className='' >
                <img src={bannerOne} className='img-fluid banner1-img'  alt="..." />
            </div>


        </div>
    );
};

export default BannerOne;