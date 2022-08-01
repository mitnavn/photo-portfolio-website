import { useNavigate, useParams } from 'react-router-dom';
import images from '../img/index1.js';
import Slider from './Slider.js';
import { Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Fade = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

function Art() {
    let {category, photoId} = useParams();
    let filteredImages = images.filter(image => image.category.toLowerCase() === category);
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    let newCategory = category.replace(/-/g, " ");
    let loadCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1).toLowerCase();
   
    const [imagesToLoad, setImagesToLoad]  = useState(filteredImages.map(i=> i.imagePreviewSrc));

    useEffect(() => {
        if(!photoId) {
            const loadImage = image => {
                return new Promise((resolve, reject) => {
                  const loadImg = new Image()
                  loadImg.src = image.imagePreviewSrc
                  loadImg.onload = () =>
                    setTimeout(() => {
                      resolve(image.imagePreviewSrc);
                      removeImage(image.imagePreviewSrc, imagesToLoad);
                    }, 2000)
          
                  loadImg.onerror = err => reject(err)
                })
              }
              
              Promise.all(filteredImages.map(image => loadImage(image)))
                .catch(err => console.log("Error", err))
        } else if (photoId) {
            setLoading(true);
        }
    }, [filteredImages, photoId, imagesToLoad])

    function removeImage(imageSrc, imagesToLoad) {
        imagesToLoad.splice(imagesToLoad.indexOf(imageSrc), 1);
        setImagesToLoad(imagesToLoad);
        if(imagesToLoad.length === 0) {
            setLoading(true);
        }
    }

    function clickImg(photoId) {
        navigate("" + photoId);
    }

    function navNext(index) {
        navigate("" + index);
    }

    function navPrev(index) {
        navigate("" + index);
    }

    function navBack(index){
        navigate("" + index);
        setLoading(imagesToLoad.length === 0);
    }

    return (
        <>
            {!loading && (<Fade>
                <div>
                    <p className="LoadPageText">{loadCategory}</p>
                    <PropagateLoader color={'#ffffff'} loading={!loading} size={9} />
                </div>
                </Fade>)}
            {loading && photoId && 
                <Fade>
                    <Row>
                        <Slider photoId={photoId} navNext={navNext} navPrev={navPrev} category={category} navBack={navBack} />
                    </Row>
                </Fade>}
            {loading && !photoId &&
                <div className="Art-div">
                    <Row >
                        {filteredImages.map((img, i) =>
                            <Col md='auto' xs="2" key={i} className="Art-col">
                                <img
                                src={img.imagePreviewSrc}
                                onClick={() => clickImg(i)} alt={img.name}
                                key={img.name}
                                className="Art-img">
                                </img>
                            </Col>
                        )}
                    </Row>
                </div>
            }
        </>
    )
}
export default Art;