const { log } = console
// const obj = {
//     name: 'nm',
//     age: 16
// }
// log(Reflect.has(obj, 'name'))

class Person {
    //构造函数
    constructor(name) {
        this.name = name
        //实力对象
    }
    say() {
        log(this.name)
    }
}
const p = new Person('xiaowang')
log(p.name)