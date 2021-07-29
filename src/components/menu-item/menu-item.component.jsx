import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, img, size, history, linkUrl, match }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className={`${size} menu-item`} >
            <div className="content" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div >
    )
}

export default withRouter(MenuItem);
