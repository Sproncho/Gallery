import React, {useEffect, useState} from 'react';
import './Gallery.css'
import img1 from '../../images/friend1.jpg'
import img2 from '../../images/friend2.jpg'
import img3 from '../../images/friend3.jpg'
import img4 from '../../images/friend4.jpg'
import img5 from '../../images/friend5.jpg'
import img6 from '../../images/friend6.jpg'
import img7 from '../../images/friend7.jpg'
import img8 from '../../images/friend8.jpg'
import img9 from '../../images/friend9.jpg'

let imagesSrc = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery(props) {
    class Image {
        constructor(src, state) {
            this.src = src;
            this.state = state;
        }
    }

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(imagesSrc.map(src => new Image(src, 'visible')))
    },[images])

    function setImage(image) {
        const imgs = [...images];
        const img = imgs.find(img => img.src === image.src);
        if (image.state === 'visible') {
            img.state = 'selected';
            img.forEach(image => {
                if (image.state !== 'selected')
                    image.state = 'hidden';
            })
        } else if (image.state === 'selecyed') {
            img.forEach(image => image.state = 'visible')
        }
        setImages(imgs);
    }

    let handleClick = (e) => {

        let image = images[parseInt(e.target.id)];
        console.log(image);
        setImage(image);
    }
    return (
        <div className='gallery'>
            {images.map((img, i) => <img onClick={handleClick} className={img.state} key={i} id={i.toString()} src={img.src}/>)}
        </div>
    );
}

export default Gallery;