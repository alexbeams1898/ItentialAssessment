const assert = require('assert');
const expect = require('chai').expect;
const getAverage = require('./average.js').getAverage;

describe('#getAverage(...numbers)', () => {

    it('should throw an error when the number of arguments is less than 2', () => {

        //// Examples ////

        // 0 args
        expect(getAverage.bind(this)).to.throw("At least two numbers are expected.");
        // 1 arg
        expect(getAverage.bind(this, 1)).to.throw("At least two numbers are expected.");

    });

    it('should throw an error when an argument equals NaN or cannot be converted to a number', () => {

        //// Examples ////

        // NaN
        expect(getAverage.bind(this, 1, 2, 3, 4, NaN)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        // "3333/3"
        expect(getAverage.bind(this, 1, 2, 3, "3333/3", 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        // {}
        expect(getAverage.bind(this, 1, 2, {}, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        // 123ABC
        expect(getAverage.bind(this, 1, "123ABC", 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        // undefined
        expect(getAverage.bind(this, undefined, 2, 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        // toString()
        expect(getAverage.bind(this, 1, new Date().toString(), 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");

    });

    it('should return average correctly for different string and number combinations', () => {

        //// Examples ////

        // All args are numbers
        assert.equal(getAverage(1, 2, 3, 4, 5), (1 + 2 + 3 + 4 + 5) / 5);
        // Zero
        assert.equal(getAverage(0, 0, 0, 0, 0), (0 + 0 + 0 + 0 + 0) / 5);
        // Negative numbers
        assert.equal(getAverage(-1, -2, -3, -4, -5), (-1 + -2 + -3 + -4 + -5) / 5)
        // Hexadecimal numbers
        assert.equal(getAverage(0xfff, 0xfff, 0xfff), (0xfff + 0xfff + 0xfff) / 3);
        // Exponential numbers
        assert.equal(getAverage(2560e-1, 10e1, 2.2e1, 22e0), (2560e-1 + 10e1 + 2.2e1 + 22e0) / 4);
        // Octal numbers
        assert.equal(getAverage(002, 003, 004), (002 + 003 + 004) / 3);
        // Binary numbers
        assert.equal(getAverage(0001, 0010, 0011, 0100, 0101), (0001 + 0010 + 0011 + 0100 + 0101) / 5);
        // All args are strings
        assert.equal(getAverage("1", "2", "3", "4", "5"), (1 + 2 + 3 + 4 + 5) / 5);
        // Mixing numbers, ints and floats, with strings
        assert.equal(getAverage(1, 2, "3", 4, 5, .2, .5, 9, 4, "3000", .127, "6.77"), (1 + 2 + 3 + 4 + 5 + .2 + .5 + 9 + 4 + 3000 + .127 + 6.77) / 12);
        // Strings with different quotes
        assert.equal(getAverage("111", '222', `333`), (111 + 222 + 333) / 3);
        // Null or empty strings that are converted to zero
        assert.equal(getAverage("", '', ``, ' ', null, 6), (0 + 0 + 0 + 0 + 0 + 6) / 6);

    });

});