import {useNavigate} from 'react-router-dom';

function useArtNavigHook(setLoading: React.Dispatch<React.SetStateAction<boolean>>, imagesToLoad: NodeRequire[]) {

    let navigate = useNavigate();

    function clickImg(photoId?: number) {
        navigate("" + photoId);
    }

    function navNext(index: number) {
        navigate("" + index);
    }

    function navPrev(index: number) {
        navigate("" + index);
    }

    function navBack(index: number){
        navigate("" + index);
        setLoading(imagesToLoad.length === 0);
    }

    return {
        clickImg,
        navNext,
        navPrev,
        navBack
    }
}

export default useArtNavigHook;