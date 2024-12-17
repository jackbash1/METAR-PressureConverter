// testing that jest is working initially
test ('that Jest is working', () => {
    expect(2+2).toBe(4);
}) 

const { convertToInHg, convertToHpa } = require('./script')

test('that the user input is a number and advises when not', () => {
    expect(typeof convertToInHg(1013)).toBe('number');
    expect(typeof convertToInHg('one zero one three')).not.toBe('number');
    expect(convertToInHg('abc')).toThrow("Input must be a number.");
});
