// testing that jest is working initially
test ('that Jest is working', () => {
    expect(2+2).toBe(4);
}) 

// imports the functions from script.js
const { convertToInHg, convertToHpa } = require('./script')

// creates the first set of tests testing the InHg function
describe('convertToInHg function tests', () => {
    // tests that a numeric user input is outputted as a string
    test('that the user input is a string', () => {
        expect(typeof convertToInHg(1013)).toBe('string');
    });

    // tests that the correct error is outputted when a string is entered
    test('throws error for non-numeric input', () => {
        expect(() => {
            convertToInHg('abc');
        }).toThrow("Input must be a number");
    });

    // tests that a value the user enters outputs the correct output
    test('tests that 1013 hPa is 29.91 inHg', () => {
        expect(convertToInHg(1013)).toBe("29.91")
    });
});

// creates the set of tests for the hPa function 
describe('convertToHPa function tests', () => {
    // tests that the numeric user input is outputted as a string
    test('that the user input is a string', () => {
        expect(typeof convertToHpa(29.92)).toBe('string');
    });

    // tests that string inputs return an error
    test('throws error for non-numeric input', () => {
        expect(() => {
            convertToHpa('xyz');
        }).toThrow("Input must be a number");
    });

    // tests that a user input returns the expected outcome
    test('tests that 29.92 inHg is 1013.21 hPa', () => {
        expect(convertToHpa(29.92)).toBe("1013.21")
    });
});
