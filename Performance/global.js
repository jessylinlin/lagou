// var i , str = ""
// for (i = 0; i < 1000; i++) {
//     str += i
// }

// for (let i = 0; i < 1000; i++) {
//     let str = ""
//     str += i
// }
//构造函数内部添加
// var fn1 = function () {
//     this.foo = function () {
//         console.log(1)
//     }
// }
// let f1 = new fn1()

// var fn2 = function () {
    
// }

// //原型对象添加
// fn2.prototype.foo = function () {
//     console.log(1)
// }
// let f2 = new fn2()
// function foo() {
//     var name = 'name111'

//     function fn () {
//         console.log(name)
//     }

//     return fn
// }

// var a = foo()
// a()

// function Person () {
//     this.name = 'name1'
//     this.age = 16
//     this.getAge = function() {
//         return this.age
//     }
// }
// const p = new Person()
// const a = p.getAge()

// function Person2 () {
//     this.name = 'name1'
//     this.age = 16
// }
// const p2 = new Person2()
// const a2 = p2.age

// var arr = new Array(100).fill('a')
// for (var i = 0; i < arr.length; i++) {
//     console.log(i)
// }
// for (var i = 0, len = arr.length; i < len; i++) {
//     console.log(i)
// }

// var arr = new Array(10).fill('a')
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// arr.forEach(function(item) {
//     console.log(item)
// })
// for (var i in arr) {
//     console.log(a[i])
// }

var arr = [1,2,3]
var a1= new Array(3)
a1[0] = 1
a1[1] = 2
a1[2] = 3