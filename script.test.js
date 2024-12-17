// testing that jest is working initially
test ('that Jest is working', () => {
    expect(2+2).toBe(4);
}) 

const { convertToInHg, convertToHpa } = require('./script')

describe('convertToInHg function tests', () => {
    test('that the user input is not a string', () => {
        expect(typeof convertToInHg(1013)).toBe('string');
    });
    
    test('throws error for non-numeric input', () => {
        expect(() => {
            convertToInHg('abc');
        }).toThrow("Input must be a number");
    });
});
