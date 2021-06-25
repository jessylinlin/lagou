//常量 
const PENDING = 'pengding'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
    constructor(executor) {
        //执行器立即执行
        //捕获执行器的错误
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }
    status = PENDING
    value = undefined //成功后的值
    reason = undefined //失败后的原因
    succsessCallback = [] //成功回调 (多次调用then)
    failCallback = [] //失败回调 (多次调用then)
        //箭头函数this指向指向类的实例对象
    resolve = (value) => {
        //状态更改为fulfilled
        if (this.status === PENDING) {
            this.status = FULFILLED
        }
        //保存成功后的值
        this.value = value

        //判断成功回调是否存在， 存在，调用回调
        // this.succsessCallback && this.succsessCallback(this.value)
        while (this.succsessCallback.length) {
            this.succsessCallback.shift()()
        }
    }
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
        }
        this.reason = reason

        //判断失败回调是否存在， 存在，调用回调
        // this.failCallback && this.failCallback(this.reason)
        while (this.failCallback.length) {
            this.failCallback.shift()()
        }
    }

    then(succsessCallback, failCallback) {
        //判断then是否有参数
        succsessCallback = succsessCallback ? succsessCallback : value => value
        failCallback = failCallback ? failCallback : reason => { throw reason }
            //创建promise对象
        let promise2 = new myPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = succsessCallback(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else {
                //异步 等待
                //存储成功、失败回调
                this.succsessCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = succsessCallback(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        });

        return promise2
    }

    finally(callback) {
        return this.then((value) => {
            return myPromise.resolve(callback()).then(() => value)
        }, (reason) => {
            return myPromise.resolve(callback()).then(() => {
                throw reason
            })
        })
    } catch (failCallback) {
        //不注冊成功回調
        return this.then(undefined, failCallback)
    }

    static all(array) {
        //结果数组
        let result = [];
        let count = 0;

        return new Promise((resolve, reject) => {
            function addData(key, value) {
                result[key] = value
                count++

                if (array.length === count) {
                    console.log(count)
                    resolve(result)
                }
            }

            for (let i = 0; i < array.length; i++) {
                if (array[i] instanceof myPromise) {
                    //promise对象
                    array[i].then(value => {
                        addData(i, value)
                    }, reason => reject(reason))
                } else {
                    addData(i, array[i])
                }
            }
        })
    }

    static resolve(value) {
        if (value instanceof myPromise) {
            return value
        } else {
            //普通值
            return new myPromise(resolve => resolve(value))
        }
    }
}

function resolvePromise(promsie2, x, resolve, reject) {
    //then调用自身promise
    if (promsie2 === x) {
        return reject(new TypeError("promise cycle error"))
    }
    //判断x的类型
    if (x instanceof myPromise) {
        //promise对象,调用x的then 方法去查看x状态
        // x.then((value) => resolve(value), reason => reject(value))
        x.then(resolve, reject)
    } else {
        resolve(x)
    }

}

module.exports = myPromise