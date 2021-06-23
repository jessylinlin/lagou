// function compose (f, g) {
//   return function (value) {
//     return f(g(value))
//   }
// }

// //求数组中最后一个元素
// //反转
// const reverse = (arr) => arr.reverse()
// const first = (arr) => arr[0]

// // const last = compose(first, reverse)
// // console.log(last([1, 2, 3, 4]))

// //lodash
// const _ = require('lodash')
// const toUpper = (str) => str.toUpperCase()
// const f = _.flowRight(toUpper, first, reverse)
// console.log(f(['first', 'second', 'last']))


//compose
function compose (...args) {
  return function (value) {
    return args.reverse().reduce((acc, fn) => fn(acc), value)
  }
}

const reverse = (arr) => arr.reverse()
const first = (arr) => arr[0]
const toUpper = (str) => str.toUpperCase()
const f = compose(toUpper, first, reverse)
console.log(f(['first', 'second', 'last']))
