import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div classNamem="item-details">
                <span className="name">{name}</span><br />
                <span className="price">{quantity} * {price}</span>
            </div>
        </div>
    )
};

export default CartItem;