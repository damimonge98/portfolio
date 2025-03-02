import React, { useState, useEffect } from 'react';
import '../css/Banner.css';

const Banner = () => {

    return (
        <div className="banner">
            <img
            className="banner-desktop"
            src={`${process.env.PUBLIC_URL}/img/banner.webp`}
            alt="Banner"
        />
        <img
            className="banner-responsive"
            src={`${process.env.PUBLIC_URL}/img/banner_responsive.webp`}
            alt="Banner"
        />
    </div>
    
    );
};

export default Banner;
