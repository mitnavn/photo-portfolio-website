// import FooterLinks from './FooterLinks.js';
import { useNavigate, useParams } from 'react-router-dom';
// import images from '../img/index1.js';
import LandingSlider from './LandingSlider.js';

function LandingPage() {
    let {photoId} = useParams();
    let navigate = useNavigate();
    
    function navNext(index) {
        navigate("" + index);
    }

    function navPrev(index) {
        navigate("" + index);
    }

    return (
        <div className="LandingPage-body">
            <div>
                <LandingSlider photoId={photoId} navNext={navNext} navPrev={navPrev} />
            </div>
            {/* <div className='FooterLinks'>
                <FooterLinks photoId={photoId}/>
            </div> */}
        </div>
    )
}

export default LandingPage;