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
let images = [img1,img2,img3,img4,img5,img6,img7,img8,img9];

function Gallery(props) {
    class Image{
        constructor(src,state) {
            this.src = src;
            this.state = state;
        }
    }
    useEffect(()=>{
        images = images.map(img => new Image(img,'visible'));
        setSelected(null);
    },[images])
    const [selected,setSelected] = useState(null);
    function setImage(image){
       if(selected === null){
           image.state = 'selected';
           images.forEach(image => {
               if(image.state !== 'selected')
                   image.state = 'hidden';
           })
           setSelected(image)
       }else if(selected === image){
           images.forEach(image => image.state = 'visible')
           setSelected(null);
       }
    }

    let handleClick = (e) => {

        let image = images[parseInt(e.target.id)]
        console.log(image)
        setImage(image);
    }
    return (
        <div className='gallery' >
            {images.map((img,i) => <img onClick={handleClick} className={img.state|'visible'} key={i} id={i.toString()} src={img}/>)}
        </div>
    );
}

export default Gallery;