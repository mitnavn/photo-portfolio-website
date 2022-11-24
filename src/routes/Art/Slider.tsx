import useSliderHook from './Hooks/SliderHook';
import { Button } from 'react-bootstrap';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
import './Art.styles.css';

type SliderProps = {
    photoId?: number,
    category?: string,
    navNext: Function,
    navPrev: Function,
    navBack: Function
}

function Slider({photoId, navNext, navPrev, category, navBack}: SliderProps) {
    const {index, filteredImages, indexMinusOne, indexPlusOne, backToCategory} = useSliderHook(photoId, category);

    return (
        <div className="Slider-items">
            <div className="Slider-item-previous" onClick={() => {navPrev(indexMinusOne())}} >
                <span>
                    <CgChevronLeft className="Slider-icon" />
                </span>
            </div>
            <div className="Slider-item-image">
                <img src={filteredImages[index].imageSrcUrl} className="Slider-img" alt={filteredImages[index].name} />
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