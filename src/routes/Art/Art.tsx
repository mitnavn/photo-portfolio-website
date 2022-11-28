import { useParams } from 'react-router-dom';
import useArtImgLoadHook from './Hooks/ArtImgLoadHook';
import useArtNavigHook from './Hooks/ArtNavigHook';
import Slider from './Slider';
import { Row } from 'react-bootstrap';
import { fadeIn } from 'react-animations';
import PropagateLoader from 'react-spinners/PropagateLoader';
import styled, { keyframes } from 'styled-components';
import './Art.styles.css';

const Fade = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

function Art() {
    const {category, photoId} = useParams() as {category?: string, photoId?: number};
    
    const {loading, setLoading, filteredImages, imagesToLoad} = useArtImgLoadHook(photoId, category);
    const {clickImg, navPrev, navNext, navBack} = useArtNavigHook(setLoading, imagesToLoad);
    
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newCategory = category!.replace(/-/g, " ");
    const loadCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1).toLowerCase();

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
                        {filteredImages.map((img, i) =>
                            <div key={i} className={img.size}>
                                <img
                                src={img.imagePreviewSrc}
                                onClick={() => clickImg(i)} alt={img.name}
                                key={img.name}
                                className="Art-img">
                                </img>
                            </div>
                        )}
                    
                </div>
            }
        </>
    )
}
export default Art;