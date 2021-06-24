const myPromise = require('./myPromise')

let p2 = new myPromise((resolve, reject) => {
  //加入异步逻辑
  // setTimeout(() => resolve("p1"), 2000)
  // throw new Error("执行器错误")
  // resolve('p2成功')

  reject('失败')
})
p2.then(value => {
  console.log(value)
}).catch(reason => {
  console.log(reason)
})
