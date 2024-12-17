// test ('that Jest is working', () => {
//     expect(2+2).toBe(4);
// }) 

const { input } = require('./script.js')

test('that the user input is a number', () => {
    expect(typeof input(1013)).toBe('number');
    expect(typeof input('one zero one three')).not.toBe('number');
});