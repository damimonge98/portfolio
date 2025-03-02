import React, { useState, useEffect } from 'react';
import '../css/Banner.css';

const Banner = () => {

    return (
        <div className="banner">
            <img
            rel="preload"
            className="banner-desktop"
            src={`${process.env.PUBLIC_URL}/img/banner.webp`}
            alt="Banner"
            fetchpriority="high"
                loading="eager"
        />
        <img
            rel="preload"
            className="banner-responsive"
            src={`${process.env.PUBLIC_URL}/img/banner_responsive.webp`}
            alt="Banner"
            fetchpriority="high"
                loading="eager"
        />
    </div>
    
    );
};

export default Banner;
