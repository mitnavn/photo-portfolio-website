import { renderHook, act } from '@testing-library/react';
import LandingPageNavigHook from './LandingPageNavigHook';
import '@testing-library/jest-dom';

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedNavigator,
}));

describe('useLandingPageNavigHook', () => {
    describe('navNext', () => {
        it('Should navigate user page', () => {
            const {result} = renderHook(() => LandingPageNavigHook());
            act(() => {
                result.current.navNext(1);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
    });
});

describe('useLandingPageNavigHook', () => {
    describe('navPrev', () => {
        it('Should navigate user page', () => {
            const {result} = renderHook(() => LandingPageNavigHook());
            act(() => {
                result.current.navPrev(0);
            });
            expect(mockedNavigator).toHaveBeenCalled();
        });
    });
});