import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, img, size }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className={`${size} menu-item`} >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div >
    )
}

export default MenuItem;
