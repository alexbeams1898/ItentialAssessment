const assert = require('assert');
const expect = require('chai').expect;
const getAverage = require('./average.js').getAverage;

describe('#getAverage(...numbers)', () => {

    it('should throw an error when the number of arguments is less than 2', () => {

        // Examples
        expect(getAverage.bind(this)).to.throw("At least two numbers are expected.");
        expect(getAverage.bind(this, 1)).to.throw("At least two numbers are expected.");

    });

    it('should throw an error when an argument equals NaN or cannot be converted to a number', () => {

        // Examples
        expect(getAverage.bind(this, 1, 2, 3, 4, NaN)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        expect(getAverage.bind(this, 1, 2, 3, "3333/3", 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        expect(getAverage.bind(this, 1, 2, {}, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        expect(getAverage.bind(this, 1, "123ABC", 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        expect(getAverage.bind(this, undefined, 2, 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");
        expect(getAverage.bind(this, 1, new Date().toString(), 3, 4, 5)).to.throw("Numbers contain a value that is NaN or cannot be converted to a number.");

    });

    it('should return average correctly for different string and number combinations', () => {

        // Examples
        assert.equal(getAverage(1, 2, 3, 4, 5), (1 + 2 + 3 + 4 + 5) / 5);
        assert.equal(getAverage(-1, -2, -3, -4, -5.0), (-1 + -2 + -3 + -4 + -5) / 5)
        assert.equal(getAverage(1, 2, "3", 4, 5, .2, .5, 9, 4, "3000", .127, "6.77"), (1 + 2 + 3 + 4 + 5 + .2 + .5 + 9 + 4 + 3000 + .127 + 6.77) / 12);
        assert.equal(getAverage("111", '222', `333`), (111 + 222 + 333) / 3);
        assert.equal(getAverage("", '', ``, ' ', null, 6), (0 + 0 + 0 + 0 + 0 + 6) / 6);

    });

});