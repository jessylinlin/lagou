//curry 原理
function curry(func) {
    return function curriedFn(...args) {
        //判断实参func.length和形参个数args
        if (args.length < func.length) {
            return function() {
                //arguments区域
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        //>= 
        return func(...args)
    }
}

function getSum(x, y, z) {
    return x + y + z
}

const currySum = curry(getSum)
console.log(currySum(1, 2, 3))
console.log(currySum(1)(2)(3))
console.log(currySum(1, 2))