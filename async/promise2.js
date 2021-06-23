//promise 封装ajax请求
function ajax (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    //h5
    xhr.responseType = 'json' //直接拿到json对象，非字符串
    xhr.onload = function () {
      //readystate == 4 
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}
const promise2 = ajax('./test.json').then((res) => {
  //console.log(res)
  //then中可手动返回promise对象
  return ajax('./test.json')
}, (error) => {
  //console.log(error)
})
console.log(promise2)