const myPromise = require('./myPromise')
/* 
将给定的值转换为promise对象
可以接受普通值和promise对象， 如果是promise对象，直接将该promise对象返回给then
resolve 判断给定的值，不是promise对象， 创建promise对象
 */

let p1 = new myPromise((resolve, reject) => {
  //加入异步逻辑
  setTimeout(() => resolve("p1"), 2000)
  // throw new Error("执行器错误")
  // resolve('成功')

  // reject('失败')
})
myPromise.resolve(10).then((value) => {
  console.log(value)
})

myPromise.resolve(p1).then((value) => {
  console.log(value)
})

