import { useNavigate, useParams } from 'react-router-dom';
import LandingSlider from './LandingSlider';

function LandingPage() {
    let {photoId} = useParams() as { photoId?: number };
    let navigate = useNavigate();

    function navNext(index: number) {
        navigate("" + index);
    }

    function navPrev(index: number) {
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