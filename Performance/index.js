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
// let obj = { name: 'zzh' }
// let lp = obj
// obj = null

//引用计数
// const user1 = {age: 11}
// const user2 = { age: 22}
// const user3  = {age: 33}

// const nameList = [
//     user1.age,
//     user2.age,
//     user3.age
// ]

// function fn() {
//     //当前作用域
//     const num1 = 1
//     const num2 = 2
// }
// fn()

//循环对象回收
function fn () {
    const obj1 = {}
    const obj2 = {}

    obj1.name = obj2
    obj2.name = obj1

    return 'test cycle'
}

fn ()


