import images from '../img/index1.js';
import { useState } from 'react';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';

function LandingSlider({photoId, navNext, navPrev}) {
    const [index, setIndex] = useState(photoId || 0);
    
    function indexPlusOne() {
        let newIndex = 0;
        if(index < images.length - 1) {
            newIndex = (1*index) + 1;
        } 
        setIndex(newIndex);
        return newIndex;
    }
    
    function indexMinusOne() {
        let newIndex = 0;
        if (index <= 0) {
            newIndex = images.length - 1;
        } else {
           newIndex = (1*index) - 1;
        }
        setIndex(newIndex);
        return newIndex;
    }

    return (
       <div className="Slider-items">
            <div className="Slider-item-previous" onClick={() => {navPrev(indexMinusOne())}} >
                <span>
                    <CgChevronLeft className="Slider-icon" />
                </span>
            </div>
            <div className="Slider-item-image">
                <img src={ images[index].imageSrc } className="Slider-img" alt={images[index].name} />
            </div>
            <div className="Slider-item-next" onClick={() => {navNext(indexPlusOne())}}>
                <span>
                    <CgChevronRight className="Slider-icon"  />
                </span>
            </div>
        </div>  
    );
}

export default LandingSlider;