import { useParams } from 'react-router-dom';
import LandingSlider from './LandingSlider';
import useLandingPageNavigHook from './Hooks/LandingPageNavigHook';
import './LandingPage.styles.css';

function LandingPage() {
    let {photoId} = useParams() as { photoId?: number };
    const {navNext, navPrev} = useLandingPageNavigHook();

    return (
        <div className="LandingPage-body">
            <div>
                <LandingSlider photoId={photoId} navNext={navNext} navPrev={navPrev} />
            </div>
        </div>
    )
}

export default LandingPage;