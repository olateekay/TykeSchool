import React from 'react';
import pic from '../assets/6.jpg'

export const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}

