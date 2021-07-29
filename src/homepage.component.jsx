import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Books</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mangas</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Comics</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Merch</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;