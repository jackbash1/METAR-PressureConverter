// testing that jest is working initially
test ('that Jest is working', () => {
    expect(2+2).toBe(4);
}) 

const { convertToHg, convertToHpa } = require('../script')

test('that the user input is a number', () => {
    expect(typeof input(1013)).toBe('number');
    expect(typeof input('one zero one three')).not.toBe('number');
});
