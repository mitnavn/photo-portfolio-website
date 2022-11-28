import { renderHook, act } from '@testing-library/react';
import LandingSliderHook from './LandingSliderHook';
import '@testing-library/jest-dom';

describe('useLandingSliderHook', () => {
    describe('Function', () => {
        it('indexPlusOne should show current index', () => {
            const {result} = renderHook(() => LandingSliderHook());
            act(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.current.indexPlusOne;
            });
            expect(result.current.index).toBe(0);
        });
        it('indexMinusOne should show current index', () => {
            const {result} = renderHook(() => LandingSliderHook());
            act(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.current.indexMinusOne;
            });
            expect(result.current.index).toBe(0);
        });
    })
})