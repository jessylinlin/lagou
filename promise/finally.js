const myPromise = require('./myPromise')

/*
无论promsie状态成功失败 ，finally的回调都会执行
后面可以链式调用then拿到当前promise对象的执行结果
可以return 一個promise
 */
let p1 = new myPromise((resolve, reject) => {
  //加入异步逻辑
  setTimeout(() => resolve("p1"), 2000)
  // throw new Error("执行器错误")
  // resolve('成功')

  // reject('失败')
})
let p2 = new myPromise((resolve, reject) => {
  //加入异步逻辑
  // setTimeout(() => resolve("p1"), 2000)
  // throw new Error("执行器错误")
  resolve('p2成功')

  // reject('失败')
})

p2.finally(() => {
  console.log('finally')
  return p1
})
  .then((value) => {
    console.log(value)
  }, (reason) => {
    console.log(reason)
  })