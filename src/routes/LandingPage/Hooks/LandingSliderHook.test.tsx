import { renderHook, act } from '@testing-library/react';
import LandingSliderHook from './LandingSliderHook';
import '@testing-library/jest-dom';

describe(`useLandingSliderHook`, () => {
    it(`Should set index to 0`, () => {
        const {result} = renderHook(() => LandingSliderHook());
        act(() => {
            result.current.indexPlusOne
        });
        expect(result.current.index).toBe(0);
    })
})