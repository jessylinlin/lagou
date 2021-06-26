// const iterator = {
//     //实现可迭代接口
//     [Symbol.iterator]: function () {
//         //实现迭代器接口
//         return {
//             //用于迭代的next()
//             next() {
//                 //next中返回的对象，迭代结果接口
//                 return {
//                     value: 'zz',
//                     done: true
//                 }
//             }
//         }
//     }
// }

const iterator = {
    store: ['foo', 'bar', 'baz'],
    //实现可迭代接口
    [Symbol.iterator]: function () {
        let index = 0
        const self = this;
        //实现迭代器接口
        return {
            //用于迭代的next()
            next() {
                //next中返回的对象，迭代结果接口
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++
                return result
            }
        }
    }
}
const { log } = console
// for (const item of iterator) {
//     log('循环体', item)
// }


const todos = {
    life: ['吃饭', '睡觉', '打游戏'],
    learn: ['js', 'html', 'css'],

    each(callback) {
        const all = [].concat(this.life, this.learn)

        for (const item of all) {
            callback(item)
        }
    },

    [Symbol.iterator]: function () {
        const all = [...this.life, ...this.learn]
        let index = 0
        return {
            next() {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}

// todos.each((item) => {
//     log(item)
// })

for (let item of todos) {
    log(item)
}