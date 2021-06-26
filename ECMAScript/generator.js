// const { log } = console
// function* foo() {
//     console.log('11111')
//     yield 100
//     console.log('22222')
//     yield 200
//     console.log('33333')
//     yield 300
// }

// const result = foo()
// log(result.next())
// log(result.next())

//实现发号器 
// function createIMaker() {
//     let i = 1
//     while (true) {
//         yield i++
//     }
// }
// const idmaker = createIMaker()
// console.log(idmaker.next())

//实现对象的iterator

const todos = {
    life: ['吃饭', '睡觉', '打游戏'],
    learn: ['js', 'html', 'css'],

    each(callback) {
        const all = [].concat(this.life, this.learn)

        for (const item of all) {
            callback(item)
        }
    },

    [Symbol.iterator]: function* () {
        const all = [...this.life, ...this.learn]

        for (const item of all) {
            yield item
        }
    }
}

for (const item of todos) {
    console.log(item)
}