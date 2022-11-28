import images from '../../../images/index1';
import { useState } from 'react';

function useSliderHook(photoId?: number, category?: string) {
    const [index, setIndex] = useState(photoId || 0);
    const filteredImages = images.filter(image => image.category.toLowerCase() === category);
    
    function indexPlusOne() {
        let newIndex = 0;
        if(index < filteredImages.length - 1) {
            newIndex = (index*1) + 1;
        } 
        setIndex(newIndex);
        return newIndex;
    }
    
    function indexMinusOne() {
        let newIndex = 0;
        if (index <= 0) {
            newIndex = filteredImages.length - 1;
        } else {
           newIndex = (index*1) - 1;
        }
        setIndex(newIndex);
        return newIndex;
    }

    function backToCategory() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newIndex: any = '';
        setIndex(newIndex);
        return newIndex;
    }

    return {
        index,
        filteredImages,
        indexMinusOne,
        indexPlusOne,
        backToCategory
    }
}

export default useSliderHook;