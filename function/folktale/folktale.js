const { curry, compose } = require('folktale/core/lambda')
const { first, toUpper } = require('lodash/fp')

// let f = curry(2, (x, y) => x + y) //
// console.log(f(1)(2))
let r = compose(toUpper, first)
console.log(r(['one', 'two']))