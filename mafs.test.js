const {add, subtract, multiply, divide, toFixed} = require('./mafs');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 4 - 1 to equal 3', () => {
    expect(subtract(4, 1)).toBe(3);
}); 

test('multiplies 5 * 6 to equal 30', () => {
    expect(multiply(5, 6)).toBe(30);
});  

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});  

test('divides 8 / 2 to equal 3', () => {
    expect(divide(8, 2)).toBe(4);
});  

test('toFixed 1.23456 to equal 1.23', () => {
    expect(toFixed(1.23456)).toBe("1.23");
});  