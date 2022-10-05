import images from '../../images/index1';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';

type SliderProps = {
    photoId?: number,
    category?: string,
    navNext: Function,
    navPrev: Function,
    navBack: Function
}

function Slider({photoId, navNext, navPrev, category, navBack}: SliderProps) {
    const [index, setIndex] = useState(photoId || 0);
    let filteredImages = images.filter(image => image.category.toLowerCase() === category);
    
    function indexPlusOne() {
        let newIndex: number = 0;
        if(index < filteredImages.length - 1) {
            newIndex = index + 1;
        } 
        setIndex(newIndex);
        return newIndex;
    }
    
    function indexMinusOne() {
        let newIndex: number = 0;
        if (index <= 0) {
            newIndex = filteredImages.length - 1;
        } else {
           newIndex = index - 1;
        }
        setIndex(newIndex);
        return newIndex;
    }

    function backToCategory() {
        let newIndex: any = '';
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
                <img src={ filteredImages[index].imageSrc.toString() } className="Slider-img" alt={filteredImages[index].name} />
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