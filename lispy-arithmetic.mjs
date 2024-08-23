class lispyArithmetic {
    isEmpty(arr) {
        return arr.length === 0;
    }

    first(arr) {
        return arr[0];
    }

    rest(arr) {
        return Array.prototype.slice.call(arr, 1);
    }

    sum(arr) {
        return Array.prototype.reduce.call(arr, function (sum, num) {
            return sum + num;
        }, 0);
    }

    prod(arr) {
        return Array.prototype.reduce.call(arr, function (prod, num) {
            return prod * num;
        }, 1);
    }

    add() {
        return this.sum(arguments);
    }

    sub() {
        if (this.isEmpty(arguments)) {
            return 0;
        } else {
            return this.first(arguments) - this.sum(this.rest(arguments));
        }
    }

    mult() {
        return this.prod(arguments);
    }

    div() {
        if (this.isEmpty(arguments)) {
            return 1;
        } else {
            return this.first(arguments) / this.prod(this.rest(arguments));
        }
    }
}

export default lispyArithmetic;