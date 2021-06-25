const { log } = console
const person = {
    name: 'name',
    age: 16
}

/* 
代理的目标对象
第二个参数是一个对象，代理的处理对象
get 监视属性访问 目标对象， 外部访问的属性名 ; 返回值， 作为外部访问代理目标对象的属性结果
set 监视设置属性
*/
// const personProxy = new Proxy(person, {
//     get(target, props) {
//         // log(target, props)
//         // return 100
//         return props in target ? target[props] : 'default'
//     },
//     set(target, prop, value) {
//         // log(target, prop, value)
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not a number`)
//             }
//         }
//     }
// })
// personProxy.age = 'str'
// log(personProxy.name)

const list = []
const proxy = new Proxy(list, {
    set(target, prop, value) {
        log('set', prop, value)
        target[prop] = value
        return true
    }
})
proxy.push(100)
proxy.push(1000)
log(proxy)