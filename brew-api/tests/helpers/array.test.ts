import { getUniqArray } from '../../src/helpers/arrays';

describe('Helpers: Array -> getUniqArray', () => {
    test('should return unique array of numbers', () => {
        expect(getUniqArray([1, 2, 1, 2])).toEqual([1, 2]);
    });

    test('should return unique array of sgrings', () => {
        expect(getUniqArray(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
});
