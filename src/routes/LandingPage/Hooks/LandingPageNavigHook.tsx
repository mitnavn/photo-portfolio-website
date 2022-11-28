import {useNavigate} from 'react-router-dom';

function useLandingPageNavigHook() {

    const navigate = useNavigate();

    function navNext(index: number) {
        navigate("" + index);
    }

    function navPrev(index: number) {
        navigate("" + index);
    }

    return {
        navNext,
        navPrev
    }

}

export default useLandingPageNavigHook;