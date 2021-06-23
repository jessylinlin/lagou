const promsie = new Promise((resolve, reject) => {
  //兑现承诺的逻辑 同步
  //resolve(100) //将状态修改为fulfilled,传递值
  reject(new Error('promise rejected')) //将状态修改为rejected,传递错误对象，表示承诺失败原因
})

//两个参数(都为回调函数) 指定onFulfilled 和onRejeced的回调函数
promsie.then((value) => {
  console.log(value)
}, (error) => {
  console.log(`rejected : ${error}`)
})
console.log('end')