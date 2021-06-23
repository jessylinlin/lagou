const _ = require('lodash')
// const array = ['jack', 'tom']
// console.log(_.first(array))
// console.log(_.last(array))

// console.log(_.toUpper(_.first(array)))
// //数组中reverse会改变原数组
// //lodash reverse 不会改变
// console.log(_.reverse(array))

// const r = _.each(array, (item, index) => {
//   console.log(item, index)
// })
// console.log(r)


// //_.memoize
// function getArea (r) {
//   console.log(r)
//   return Math.PI * r * r
// }

// // let getAreaWithMemory = _.memoize(getArea)
// // console.log(getAreaWithMemory(4))
// // console.log(getAreaWithMemory(4))
// // console.log(getAreaWithMemory(4))

// //模拟memoize
// function memoize (fn) {
//   let cache = {}

//   return function () {
//     let key = JSON.stringify(arguments)

//     cache[key] = cache[key] || fn.apply(this, arguments)

//     return cache[key]
//   }
// }
// let getAreaWithMemory = memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))


//fp
const fp = require('lodash/fp');
_.map(['23', '8', '10'], parseInt)
//23 NAN 10
console.log(fp.map(parseInt, ['23', '8', '10']))