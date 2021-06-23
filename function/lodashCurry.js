// function checkAge (age) {
//   let mini = 18
//   return age >= mini
// }

// function checkAge (mini, age) {
//   return age >= mini
// }

// console.log(checkAge(18, 20))

//柯里化
// function checkAge (mini) {
//   return function (age) {
//     return age >= mini
//   }
// }

let checkAge = (min) => (age) => age >= min

let checkAge18 = checkAge(18)
console.log(checkAge18(22))


//lodash curry
const _ = require('lodash')

function getSum (x, y, z) {
  return x + y + z
}

const currySum = _.curry(getSum)
console.log(currySum(1, 2, 3))
console.log(currySum(1)(2)(3))

//空白字符
// ''.match(/\s+/g)
//数字
// ''.match(/\d+/g)
function match (reg, str) {
  return str.match(reg)
}
const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
console.log(haveSpace('hello world'))
console.log(haveNumber('hello world'))

const filter = _curry(function (func, array) {
  return array.filter(func)
})
//console.log(filter(haveSpace, ['jonh connor', 'john_dane']))

const findSpace = filter(haveSpace);
console.log(findSpace(['jonh connor', 'john_dane']))

//curry 原理
function curry (func) {
  return function curriedFn (...args) {
    //判断实参func.length和形参个数args
    if (args.length < func.length) {
      return function () {
        //arguments区域
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    //>= 
    return func(...args)
  }
}