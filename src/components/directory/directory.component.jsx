import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                { id: 1, title: "Books", img: "https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg" },
                { id: 2, title: "Mangas", img: "https://cdn.pixabay.com/photo/2020/03/12/15/13/comic-4925345_960_720.jpg" },
                { id: 3, title: "Comics", img: "https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_960_720.jpg" },
                { id: 4, title: "Clothing", img: "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg", size: "large" },
                { id: 5, title: "Accessories", img: "https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_960_720.jpg", size: "large" }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(section => (
                    <MenuItem key={section.id} title={section.title} img={section.img} size={section.size} />
                ))}
            </div>
        )
    }


}

export default Directory;