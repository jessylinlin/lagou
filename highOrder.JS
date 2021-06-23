//函数作为参数
function forEach (array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

let arr = [1, 3, 4, 7, 8]

//filter
function filter (array, fn) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i])
    }
  }

  return result
}
const r = filter(arr, function (item) {
  return item % 2 === 0
})

//函数作为返回值

function makefn () {
  let msg = 'tegs'
  //匿名
  return function () {
    console.log(msg)
  }
}
makefn()()

//once
function once (fn) {
  let done = false

  return function () {
    if (!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}
let pay = once(function (money) {
  console.log(`支付${money}`)
})

//map
const map = (array, fn) => {
  let results = [];

  for (let value of array) {
    results.push(fn(value))
  }

  return results
}
let arr = [1, 2, 3, 4];
arr = map(arr, (v) => v * v)


//every
const every = (array, fn) => {
  let results = false;

  for (let val of array) {
    results = fn(val)

    if (!results) return false
  }

  return true
}
let arr = [1, 2, 3, 4];
let r = every(arr, v => v > 10)


//some
const some = (array, fn) => {
  let results = false;

  for (let val of array) {
    results = fn(val)

    if (results) return true
  }

  return results
}

let r = some(arr, v => v % 2 === 0)

//闭包
function makePower (power) {
  return function (number) {
    return Math.pow(number, power)
  }
}
let power2 = makePower(2)
let power3 = makePower(3)
console.log(power2(4))

function makeSalary (base) {
  return function (performance) {
    return base + performance
  }
}

let salaryLeve1 = makeSalary(12000)
let salaryLeve2 = makeSalary(15000)

console.log(salaryLeve1(2000))

//纯函数
function getSum (x, y) {
  return x + y
}