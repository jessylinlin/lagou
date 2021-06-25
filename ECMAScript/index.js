// if (true) {
//   var foo = 'foo'
//   let foo = 'foo'
// }
// console.log(foo)
//非块级作用域内，外层覆盖内层
// for (var i = 0; i < 3; i++) {
//   for (var i = 0; i < 3; i++) {
//     console.log(i)
//   }
// }
// for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i)
//   }
// }

//循环访问nodes
/*
  3
  拿到的是全局作用域里的i
  1、建立闭包， 借助函数作用域摆脱全局作用域
  2、块级作用域let
*/
// var elements = [{}, {}, {}]
// for (var i = 0; i < elements.length; i++) {
//   elements[i].onclick = function () {
//     console.log(i)
//   }
// }
// elements[0].onclick()

// for (let i = 0; i < 3; i++) {
//   let i = 'foo'
//   console.log(i)
// }
// console.log(foo) //此时foo已经声明，未赋值
// var foo = 'zce'

// console.log(foo) //此时foo已经声明，未赋值
// let foo = 'zce'

// const obj = {}
// obj.name = 'test'
// console.log(obj)

// const arr = [100, 200, 300]
// const [first, ...rest] = arr
// console.log(rest)

//拆分字符串
// const path = 'orange/lagou/es'
// const [, mid,] = path.split("/")
// console.log(mid)
// const name = 'name1'
// const obj = { name: 'john', age: 16 }
// const { name: ObjName = 'jack' } = obj
// console.log(ObjName)
const { log } = console
// log(1)

// const str = `ecmsscript 

// \`2015\``
// log(str)
// const str = log`template`、

//帶tag的模板字符串
// const name = 'name1'
// const gender = 'girl'
// function myTag (str, name, gender) {
//   // console.log(str, name, gender)
//   return str[0] + name + str[1] + gender
// }
// const result = myTag`hey, ${name}, is ${gender}`
// log(result)

// const message = "Error: foo is not defined."

// log(
//   message.startsWith('Error'),
//   message.endsWith('.'),
//   message.includes('foo')

// )

//默认参数
// function foo (enable = true) {
//   log(enable)
// }
// foo()

//剩余参数
// function rest (first, ...args) {
//   //old
//   console.log(arguments) //伪数组
//   console.log(args) //数组
// }
// rest(1, 2)

// ...
// const arr = [1, 2, 3]
// console.log.apply(console, arr) //arr形参传入
// log(...arr)

//this
// const person = {
//     name: 'normnal',
//     say: function() {
//         console.log(this.name)
//     },
//     sayAsync: function() {
//         setTimeout(function() {
//             log(this.name)
//         }, 1000)
//     }
// }

// const person = {
//     name: 'normnal',
//     say: () => {
//         console.log(this.name)
//     },
//     sayAsync: function() {
//         setTimeout(() => {
//             log(this.name)
//         }, 1000)
//     }
// }
// person.say()
// person.sayAsync()

//对象字面量 函数
// const bar = 'bar'
// const obj = {
//     foo: 123,
//     bar,
//     method() {
//         console.log(this)

//     },
//     //计算属性名
//     [Math.random()]: 123
// }
// obj.method()

// const source1 = {
//     a: 1,
//     b: 2
// }
// const target = {
//     a: 'first',
//     c: "c"

// }
// const result = Object.assign(target, source1)
// log(target)
// log(target === result)


//assign
//指向同一个内存地址
// function func(obj) {
//     obj.name = 'change name'
//     log(obj)
// }
// const obj1 = { name: 'init' }
// func(obj1)
// log(obj1)
// function func(obj) {
//     const funcObj = Object.assign({}, obj)
//     funcObj.name = 'change name'
//     log(funcObj)
// }
// const obj1 = { name: 'init' }
// func(obj1)
// log(obj1)

//is
// log(
//     NaN === NaN
//     Object.is(NaN, NaN)
// )