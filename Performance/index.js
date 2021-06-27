// function fn() {
//     arrList = []
//     arrList[10000] = 'LG IS A CODER'
// }
// fn()

//js内存管理流程
// //申请空间
// let obj = {}
// //使用空间
// obj.name = 'zzh'
// //释放空间
// obj = null

//引用 + 可达
let obj = { name: 'zzh' }
let lp = obj
obj = null

