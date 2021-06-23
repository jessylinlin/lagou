const fp = require('lodash/fp')
const fs = require('fs')

class IO {
  static of (value) {
    return new IO(function () {
      return value
    })
  }
  constructor(fn) {
    this._value = fn
  }
  map (fn) {
    return new IO(fp.flowRight(fn, this._value))
  }
}

// let r = IO.of(process)
//   .map(p => p.execPath)

// console.log(r._value())

//readfile prin => cat函数

let readFile = (filename) => {
  return new IO(() => {
    return fs.readFileSync(filename, 'utf-8')
  })
}

let print = (x) => {
  return new IO(() => {
    console.log(x)
    return x
  })
}

let cat = fp.flowRight(print, readFile)
let r1 = cat('./package.json')._value()._value()
console.log(r1)