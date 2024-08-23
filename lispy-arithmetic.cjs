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
    function isEmpty (arr) {
        return arr.length === 0;
    }

    function first (arr) {
        return arr[0];
    }

    function rest (arr) {
        return Array.prototype.slice.call(arr, 1);
    }

    function sum (arr) {
        return Array.prototype.reduce.call(arr, function (sum, num) {
            return sum + num;
        }, 0);
    }

    function prod (arr) {
        return Array.prototype.reduce.call(arr, function (prod, num) {
            return prod * num;
        }, 1);
    }

    return {
        add: function () {
            return sum(arguments);
        },

        sub: function () {
            if (isEmpty(arguments)) {
                return 0;
            } else {
                return first(arguments) - sum(rest(arguments));
            }
        },

        mult: function () {
            return prod(arguments);
        },

        div: function () {
            if (isEmpty(arguments)) {
                return 1;
            } else {
                return first(arguments) / prod(rest(arguments));
            }
        }
    };
}));
