import { handleClick } from './About';

describe('In About component', () => {
    describe('handleClick function', () => {
        it('Behaves as expected', () => {
            expect(handleClick()).toBe('mailto:sokuranna@outlook.com');
        });
    })
});