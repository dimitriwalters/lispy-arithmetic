var should = require('chai').should(),
    la = require('../lispy-arithmetic.js');

describe('#add', function () {
    var sum = 0;

    it('zero arguments', function () {
        sum = la.add();

        sum.should.equal(0);
    });

    it('one argument', function () {
        sum = la.add(5);

        sum.should.equal(5);
    });

    it('two arguments', function () {
        sum = la.add(5, 3);

        sum.should.equal(8);
    });

    it('more than two arguments', function () {
        sum = la.add(5, 3, 4, 11, 2);

        sum.should.equal(25);
    });
});

describe('#sub', function () {
    var sum = 0;

    it('zero arguments', function () {
        sum = la.sub();

        sum.should.equal(0);
    });

    it('one argument', function () {
        sum = la.sub(5);

        sum.should.equal(5);
    });

    it('two arguments', function () {
        sum = la.sub(5, 3);

        sum.should.equal(2);
    });

    it('more than two arguments', function () {
        sum = la.sub(5, 3, 4, 11, 2);

        sum.should.equal(-15);
    });
});

describe('#mult', function () {
    var prod = 0;

    it('zero arguments', function () {
        prod = la.mult();

        prod.should.equal(1);
    });

    it('one argument', function () {
        prod = la.mult(5);

        prod.should.equal(5);
    });

    it('two arguments', function () {
        prod = la.mult(5, 3);

        prod.should.equal(15);
    });

    it('more than two arguments', function () {
        prod = la.mult(5, 3, 4, 11, 2);

        prod.should.equal(1320);
    });
});

describe('#div', function () {
    var prod = 0;

    it('zero arguments', function () {
        prod = la.div();

        prod.should.equal(1);
    });

    it('one argument', function () {
        prod = la.div(5);

        prod.should.equal(5);
    });

    it('two arguments', function () {
        prod = la.div(6, 3);

        prod.should.equal(2);
    });

    it('more than two arguments', function () {
        prod = la.div(120, 3, 2, 5);

        prod.should.equal(4);
    });
});
