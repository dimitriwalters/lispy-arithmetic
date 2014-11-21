# lispy-arithmetic

A small javascript library to do arithmetic in a lisp-inspired way.

## Installation

```
npm install lispy-arithmetic
```

## Usage

```js
la.add(); // 0
la.add(3); // 3
la.add(3, 2); // 5
la.add(3, 2, 4); // 9

la.sub(); // 0
la.sub(3); // 3
la.sub(3, 2); // 1
la.sub(7, 3, 2); // 2

la.mult(); // 1
la.mult(3); // 3
la.mult(3, 2); // 6
la.mult(3, 2, 4); // 24

la.div(); // 1
la.div(3); // 3
la.div(6, 3); // 2
la.div(12, 3, 2); // 2

la.add(
    la.mult(
        la.add(1, 3),
        la.sub(6, 4)),
    la.div(
        la.sub(10, 4),
        la.add(-2, 5))); // 10
```

## License

Licensed under [MIT](http://opensource.org/licenses/MIT).