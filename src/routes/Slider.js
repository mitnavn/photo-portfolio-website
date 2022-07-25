import images from '../img/index1.js';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';

function Slider({photoId, navNext, navPrev, category, navBack}) {
    const [index, setIndex] = useState(photoId || 0);
    let filteredImages = images.filter(image => image.category.toLowerCase() === category);
    
    function indexPlusOne() {
        let newIndex = 0;
        if(index < filteredImages.length - 1) {
            newIndex = (1*index) + 1;
        } 
        setIndex(newIndex);
        return newIndex;
    }
    
    function indexMinusOne() {
        let newIndex = 0;
        if (index <= 0) {
            newIndex = filteredImages.length - 1;
        } else {
           newIndex = (1*index) - 1;
        }
        setIndex(newIndex);
        return newIndex;
    }

    function backToCategory() {
        let newIndex = '';
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
                <img src={ filteredImages[index].imageSrc } className="Slider-img" alt={filteredImages[index].name} />
                <div className="Slider-item-close" onClick={() => {navBack(backToCategory())}}>
                    <Button variant="link" className="Slider-back-btn">Back</Button>
                </div>
            </div>
            <div className="Slider-item-next" onClick={() => {navNext(indexPlusOne())}}>
                <span>
                    <CgChevronRight className="Slider-icon"  />
                </span>
            </div>
        </div> 
    );
}

export default Slider;