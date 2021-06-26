

const { log } = console

// //set 数组去重
// const { set } = require("lodash")

// const arr = [1, 2, 3, 4, 4, 4, 1]
// const result = Array.from(new Set(arr))
// const result1 = [...new Set(arr)]
// log(result, result1)

// const obj = {}
// obj[true] = 'val'
// obj[123] = 'val'
// obj[{ a: 1 }] = 'val'
// log(Object.keys(obj))

// const map = new Map()
// map.set({ name: 'tom' }, 90)
// log(map)
// const cache = {}
// cache['foo'] = Math.random()

// cache['foo'] = 123

// log(cache)
// const obj = {
//     [Symbol()]: 123
// }
// log(obj)

// const s = Symbol.for('1')
// const s2 = Symbol.for(1)
// log(s === s2)

// const obj= {
//     [Symbol.toStringTag] : 'xobject'
// }
// const map = new Map()
// map.set('foo', 123)
// map.set('bar', 456)

// for (const item of map) {
//     log(item)
// }


// const obj = { foo: 123, bar: 456 }
// for (let item of obj) {
//     log(item)
// }
const set = new Set([1, 2, 3])
const iterator = set[Symbol.iterator]()

log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())
