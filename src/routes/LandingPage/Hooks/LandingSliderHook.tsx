import images from '../../../images/index1';
import { useState } from 'react';

function useLandingSliderHook(photoId?: number) {
    const [index, setIndex] = useState(photoId || 0);

    function indexPlusOne() {
        let newIndex = 0;
        if(index < images.length - 1) {
            newIndex = (index*1) + 1;
        } 
        setIndex(newIndex);
        return newIndex;
    }
    
    function indexMinusOne() {
        let newIndex = 0;
        if (index <= 0) {
            newIndex = images.length - 1;
        } else {
           newIndex = (index*1) - 1;
        }
        setIndex(newIndex);
        return newIndex;
    }

    return {
        index,
        indexPlusOne,
        indexMinusOne
    }
}

export default useLandingSliderHook;