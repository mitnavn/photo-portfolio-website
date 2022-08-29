import { useNavigate, useParams } from 'react-router-dom';
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
        </div>
    )
}

export default LandingPage;