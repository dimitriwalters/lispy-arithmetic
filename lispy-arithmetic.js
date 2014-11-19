(function (root, lispyArithmetic) {
    if (typeof exports === 'object') {
        module.exports = lispyArithmetic();
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return (root.la = lispyArithmetic());
        });
    } else {
        root.la = lispyArithmetic();
    }
}(this, function () {
    return {};
}));
