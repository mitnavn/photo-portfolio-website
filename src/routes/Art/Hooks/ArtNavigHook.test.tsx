import { renderHook, act } from '@testing-library/react';
import ArtNavigHook from './ArtNavigHook';
import '@testing-library/jest-dom';

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedNavigator,
}));

describe('useArtNavigHook', () => {
    describe('Function', () => {
        it('clickImg should navigate user page', () => {
            const setLoadingMock = jest.fn();
            const imagesToLoadMock = [] as string[];
            const {result} = renderHook(() => ArtNavigHook(setLoadingMock, imagesToLoadMock));
            act(() => {
                result.current.clickImg(1);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
        it('navNext should navigate user page', () => {
            const setLoadingMock = jest.fn();
            const imagesToLoadMock = [] as string[];
            const {result} = renderHook(() => ArtNavigHook(setLoadingMock, imagesToLoadMock));
            act(() => {
                result.current.navNext(2);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
        it('navPrev should navigate user page', () => {
            const setLoadingMock = jest.fn();
            const imagesToLoadMock = [] as string[];
            const {result} = renderHook(() => ArtNavigHook(setLoadingMock, imagesToLoadMock));
            act(() => {
                result.current.navPrev(1);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
        it('navBack should navigate user page', () => {
            const setLoadingMock = jest.fn();
            const imagesToLoadMock = [] as string[];
            const {result} = renderHook(() => ArtNavigHook(setLoadingMock, imagesToLoadMock));
            act(() => {
                result.current.navBack(0);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
    });
});