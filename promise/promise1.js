/* 
promise是一个类 执行类的时候 需要传递一个执行器 执行器立即执行 
执行器有俩参数 ， 都为函数

有三种状态 等待 pending 成功 fulfilled 失败 rejected
一旦状态确定 无法更改

resolve/reject 函数用来更改状态

*/

// let promise = new Promise((resolve, reject) => {
//   resolve('success')
//   // reject('fail')
// })

/* 
  then 方法内部 判断状态， 状态成功，调用成功回调，状态失败，调用失败回调
  then 方法是被定义在原型对象中
  then 成功回调有一个参数，表示成功后的值 失败回调有一个参数，表示失败原因
  then 多次执行（异步）
  then 方法可以被链式调用，后面的then 方法拿到的回调函数是上一个thene方法的回调函数的返回值
  then 方法返回的是普通值，直接调用resolve
  如果是promise对象，查看promise对象返回的结果
  根据返回结果 调用resolve/reject
  then 返回的promise是自己本身的promise ,promise循环调用，报错
  then方法可不传递参数， promise状态依次向后传递
  */

/* 
  捕获执行器和then方法回调函数中的错误
  then回调函数在执行过程报错， 下一个then方法需要捕获到
*/


const myPromise = require('./myPromise')

let promise = new myPromise((resolve, reject) => {
  //加入异步逻辑
  // setTimeout(() => resolve("成功"), 2000)
  // throw new Error("执行器错误")
  // resolve('成功')

  reject('失败')
})
function other () {
  return new myPromise((resolve, reject) => {
    resolve('other')
    reject("")
  })
}
promise.then()
  .then(value => {
    console.log(value)
    // return new myPromise((resolve, reject) => {
    //   resolve('other')
    // })
    // return other()
    // return p1
    // throw new Error('Then错误')
    return 'aaaa'
  }, reason => {
    console.log(reason)
    return 1000
  }).then(value => {
    console.log(value)
  })
