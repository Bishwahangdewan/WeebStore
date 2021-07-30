import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div style={{ width: "95%", margin: "auto" }}>
                {collections.map(({ id, title, items }) => (
                    <CollectionPreview key={id} title={title} items={items} />
                ))}
            </div>
        )
    }
}

export default Shop;