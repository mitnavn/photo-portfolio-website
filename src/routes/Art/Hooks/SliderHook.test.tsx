import { renderHook, act } from '@testing-library/react';
import SliderHook from './SliderHook';
import '@testing-library/jest-dom';

describe('useSliderHook', () => {
    describe('Function', () => {
        it('indexPlusOne should show current index', () => {
            const photoIdMock = 2;
            const categoryMock = '';
            const {result} = renderHook(() => SliderHook(photoIdMock, categoryMock));
            act(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.current.indexPlusOne;
            });
            expect(result.current.index).toBe(2);
        });
        it('indexMinusOne should show current index', () => {
            const photoIdMock = 1;
            const categoryMock = '';
            const {result} = renderHook(() => SliderHook(photoIdMock, categoryMock));
            act(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.current.indexMinusOne;
            });
            expect(result.current.index).toBe(1);
        });
        it('backToCategory should show current index', () => {
            const photoIdMock = 0;
            const categoryMock = '';
            const {result} = renderHook(() => SliderHook(photoIdMock, categoryMock));
            act(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.current.indexMinusOne;
            });
            expect(result.current.index).toBe(0);
        });
    });
});