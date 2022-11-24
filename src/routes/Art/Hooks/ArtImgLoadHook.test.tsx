import { renderHook } from '@testing-library/react';
import ArtImgLoadHook from './ArtImgLoadHook';
import '@testing-library/jest-dom';

describe('useArtImgLoadHook', () => {
    describe('Function', () => {
        it('useEffect should work as expected', () => {
            const photoIdMock = 1;
            const categoryMock = '';
            const {result} = renderHook(() => ArtImgLoadHook(photoIdMock, categoryMock));
            expect(result.current.loading).toBe(true);
        });
        it('useEffect should work as expected', () => {
            const photoIdMock = undefined;
            const categoryMock = '';
            const {result} = renderHook(() => ArtImgLoadHook(photoIdMock, categoryMock));
            expect(result.current.loading).toBe(false);
        });
    })
})