const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test('One euro should be 1.206 dollars', function(){

const {fromEuroToDollar } = require('./app.js')

const dollars = fromEuroToDollar(3.5)

const expected = 3.5 * 1.2;

expect(fromEuroToDollar(3.5)).toBe(expected);
});

test('One Dollar should be 127.9 Yen', function(){

    const {fromDollarToYen} = require('./app.js')

    const yen = fromDollarToYen(2.5)

    const expected = 2.5 * 127.9;

    expect(fromDollarToYen(2.5)).toBe(expected);
});

test('One Yen should be 0.8 Pounds', function(){

    const {fromYenToPound} = require('./app.js')

    const pound = fromYenToPound(3)

    const expected = 3 * 0.8;

    expect(fromYenToPound(3)).toBe(expected);
});