//lodash
const _ = require('lodash')

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
// const f = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)
// console.log(f(['first', 'second', 'last']))

//调试
//NEVER SAY DIE --> never-say-die
const split = _.curry((step, str) => _.split(str, step))
const join = _.curry((step, str) => _.join(str, step))
//辅助函数
const log = v => {
  console.log(v)
}
const trace = _.curry((tag, v) => {
  console.log(tag, v)
  return v
})
const map = _.curry((fn, arr) => _.map(arr, fn))
const f = _.flowRight(join('-'), trace('map后'), map(_.toLower), trace('slit后'), split(' '))
console.log(f('NEVER SAY DIE'))


//fp
const fp = require('lodash/fp')
const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
console.log(f('NEVER SAY DIE'))