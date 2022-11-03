import images from '../../images/index1';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
import useLandingSliderHook from './Hooks/LandingSliderHook'
import './LandingPage.styles.css';

type LandingSliderProps = {
    photoId?: number,
    navNext: Function,
    navPrev: Function,
}

function LandingSlider({photoId, navNext, navPrev}: LandingSliderProps) {
    const {index, indexPlusOne, indexMinusOne} = useLandingSliderHook(photoId);
    
    return (
       <div className="Slider-items">
            <div className="Slider-item-previous" onClick={() => {navPrev(indexMinusOne())}} >
                <span>
                    <CgChevronLeft className="Slider-icon" />
                </span>
            </div>
            <div className="Slider-item-image">
                <img src={ images[index].imageSrc.toString() } className="Slider-img" alt={images[index].name} />
            </div>
            <div className="Slider-item-next" onClick={() => {navNext(indexPlusOne())}}>
                <span>
                    <CgChevronRight className="Slider-icon" />
                </span>
            </div>
        </div>  
    );
}

export default LandingSlider;