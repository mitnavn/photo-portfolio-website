import images, {ImageMeta} from "../../../images/index1";
import {useState, useEffect} from 'react';

function useArtImgLoadHook(photoId?: number, category?: string) {
  const filteredImages = images.filter(image => image.category.toLowerCase() === category);

  const [loading, setLoading] = useState(false);

  const [imagesToLoad, setImagesToLoad]  = useState(filteredImages.map(i=> i.imagePreviewSrc));
    
  useEffect(() => {
    if(!photoId) {
      const loadImage = (image: ImageMeta) => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image();
          loadImg.src = image.imagePreviewSrc;
          loadImg.onload = () =>
            setTimeout(() => {
              resolve(image.imagePreviewSrc);
              removeImage(image.imagePreviewSrc, imagesToLoad);
            }, 2000)
          
          loadImg.onerror = err => reject(err)
        })
      };
              
      Promise.all(filteredImages.map(image => loadImage(image)))
        .catch(err => console.log("Error", err))
    } else if (photoId) {
        setLoading(true);
    }
    }, [filteredImages, photoId, imagesToLoad]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function removeImage(imageSrcUrl: string, imagesToLoad: Array<string | any>) {
    imagesToLoad.splice(imagesToLoad.indexOf(imageSrcUrl), 1);
    setImagesToLoad(imagesToLoad);
    if(imagesToLoad.length === 0) {
      setLoading(true);
    }
  }

  return {
    loading,
    setLoading,
    filteredImages,
    imagesToLoad
  }
}

export default useArtImgLoadHook;