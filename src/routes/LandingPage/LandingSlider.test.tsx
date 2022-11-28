import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import LandingSlider from './LandingSlider';

describe('LandingSlider', () => {
    describe('onClick functions', () => {
        it('Should exist', () => {
            render(<LandingSlider navNext={() => undefined} navPrev={() => undefined} />);
            expect(screen.getByTestId('click-next')).toBeInTheDocument();
            expect(screen.getByTestId('click-prev')).toBeInTheDocument();
        });

        it('Should work as expected', () => {
            const next = jest.fn(() => {return undefined;});
            const prev = jest.fn(() => {return undefined;});

            render(<LandingSlider navNext={next} navPrev={prev} />);

            fireEvent.click(screen.getByTestId('click-next'));
            fireEvent.click(screen.getByTestId('click-prev'));

            expect(next).toHaveBeenCalled();
            expect(prev).toHaveBeenCalled();
        })
    })
})