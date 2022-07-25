import images from '../img/index1.js';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Gallery() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [setLoading])

    return (
        <div className="Gallery-main">
            {loading ? <p>...loading...</p> 
            :   images.map((img, i) =>
                <div className="Gallery-row">
                <div className="Gallery-column">
                    <Link to="/">
                    <img src={img.imageSrc} alt="img0" className="Gallery-img"></img>
                    </Link>
                </div>
            </div>
            )
            }  
        </div>
    );
}

export default Gallery;