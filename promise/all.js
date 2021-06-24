/*
Promise.all
解决异步并发问题， 按照异步方法调用顺序 得到异步代码结果
返回promise对象
状态都是成功
只要一个失败，结果失败
数组中传入的是普通值，直接放到结果数组，传入promise对象，先去执行promise对象，再放入结果对象
*/
const myPromise = require('./myPromise')

let p1 = new myPromise((resolve, reject) => {
  //加入异步逻辑
  setTimeout(() => resolve("p1"), 2000)
  // throw new Error("执行器错误")
  // resolve('成功')

  // reject('失败')
})
function p2 () {
  return new myPromise((resolve, reject) => {
    //加入异步逻辑
    // setTimeout(() => resolve("成功"), 2000)
    // throw new Error("执行器错误")
    resolve('p2')

    // reject('失败')
  })
}



myPromise.all(['a', 'b', p1, p2()]).then((result) => {
  console.log(result)
})