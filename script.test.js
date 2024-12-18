// testing that jest is working initially
test ('that Jest is working', () => {
    expect(2+2).toBe(4);
}) 

const { convertToInHg, convertToHpa } = require('./script')

describe('convertToInHg function tests', () => {
    test('that the user input is a string', () => {
        expect(typeof convertToInHg(1013)).toBe('string');
    });
    
    test('throws error for non-numeric input', () => {
        expect(() => {
            convertToInHg('abc');
        }).toThrow("Input must be a number");
    });

    test('tests that 1013 hPa is 29.91 inHg', () => {
        expect(convertToInHg(1013)).toBe("29.91")
    });
});

describe('convertToHPa function tests', () => {
    test('that the user input is a string', () => {
        expect(typeof convertToHpa(29.92)).toBe('string');
    });
    
    test('throws error for non-numeric input', () => {
        expect(() => {
            convertToHpa('xyz');
        }).toThrow("Input must be a number");
    });

    test('tests that 29.92 inHg is 1013.21 hPa', () => {
        expect(convertToHpa(29.92)).toBe("1013.21")
    });
});
